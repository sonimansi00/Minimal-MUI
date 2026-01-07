import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import fs from "fs/promises";
import path from "path";
import { z } from "zod";
const SKILLS_ROOT = path.join(process.cwd(), "src/skills");

const server = new Server(
  {
    name: "minimal-mui-skill-server",
    version: "0.1.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

/**
 * List available tools
 */
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "list_mui_skills",
        description: "List all available MUI component skills in this package.",
        inputSchema: {
          type: "object",
          properties: {},
        },
      },
      {
        name: "get_mui_skill_details",
        description: "Get the design requirements, prompting guide, and templates for a specific MUI skill.",
        inputSchema: {
          type: "object",
          properties: {
            skill_name: {
              type: "string",
              description: "The name of the skill (e.g., 'buttons', 'alert', 'textfield').",
            },
          },
          required: ["skill_name"],
        },
      },
    ],
  };
});

/**
 * Handle tool calls
 */
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    if (name === "list_mui_skills") {
      const skills = await fs.readdir(SKILLS_ROOT);
      const filteredSkills = skills.filter(async (s) => (await fs.stat(path.join(SKILLS_ROOT, s))).isDirectory());
      
      // Since readdir returns strings, we'll just return the names that are actually in our mcp.json if possible
      // or just return all directories in SKILLS_ROOT
      return {
        content: [
          {
            type: "text",
            text: `Available MUI Skills:\n${skills.join("\n")}`,
          },
        ],
      };
    }

    if (name === "get_mui_skill_details") {
      const { skill_name } = z.object({ skill_name: z.string() }).parse(args);
      const skillPath = path.join(SKILLS_ROOT, skill_name);

      const files = ["skill.md", "design-requirement.md", "prompting.md", "template.md"];
      const contents = [];

      for (const file of files) {
        const filePath = path.join(skillPath, file);
        try {
          const content = await fs.readFile(filePath, "utf-8");
          contents.push(`### ${file}\n\n${content}`);
        } catch (err) {
          // Skip missing files
        }
      }

      if (contents.length === 0) {
        return {
          content: [{ type: "text", text: `Skill '${skill_name}' not found or has no documentation files.` }],
          isError: true,
        };
      }

      return {
        content: [
          {
            type: "text",
            text: `MUI Skill Details for: ${skill_name}\n\n${contents.join("\n\n---\n\n")}`,
          },
        ],
      };
    }

    throw new Error(`Tool not found: ${name}`);
  } catch (error: any) {
    return {
      content: [
        {
          type: "text",
          text: `Error: ${error.message}`,
        },
      ],
      isError: true,
    };
  }
});

/**
 * Main function to run the server
 */
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Minimal MUI Skill MCP server running on stdio");
}

main().catch((error) => {
  console.error("Server error:", error);
  process.exit(1);
});
