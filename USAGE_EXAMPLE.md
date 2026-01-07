# How to use Minimal MUI Skills in Another Project

This guide explains how to enable the Minimal MUI MCP server so your AI agent (Claude, Cursor, etc.) can build high-quality MUI components in any project.

## 1. Prerequisites

- **Node.js**: Installed on your machine.
- **Minimal MUI MCP**: This project must be built locally.

### Build Step
Navigate to this directory (`c:/swirl/minimal-mui-mcp`) and run:
```bash
npm install
npm run build
```

## 2. Configuration for AI Tools

You need to tell your AI client where the MCP server is located.

### For Claude Desktop (Recommended)
Add this to your configuration file (usually found at `%APPDATA%\Claude\claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "minimal-mui": {
      "command": "node",
      "args": ["c:/swirl/minimal-mui-mcp/dist/mcp-server.js"]
    }
  }
}
```

### For VS Code (using Roo Code or similar MCP extensions)
Add a new MCP server with these details:
- **Server ID**: `minimal-mui`
- **Command**: `node`
- **Arguments**: `c:/swirl/minimal-mui-mcp/dist/mcp-server.js`

### For Claude CLI (npx)
If you use the `claude` CLI, you can launch it with the MCP server attached directly:

```bash
npx @anthropic-ai/claude@latest --mcp "node c:/swirl/minimal-mui-mcp/dist/mcp-server.js"
```

---

## 3. Project Integration Example

If you want to use this within a specific project's workflow (e.g., a Next.js app), follow these steps:

1. **Keep the MCP Server Running**: Ensure you've built the MCP server as shown in step 1.
2. **Open your project**: Open your target React/Next.js project in your IDE.
3. **Prompt the AI**: Use a prompt that links the MCP skill to your local file.

**Scenario**: You want to add a "Delete" button to a `UserCard.tsx` file.

**Prompt**:
> "@minimal-mui Check the 'buttons' skill. Implement a 'Large' and 'Contained' button with the 'Error' color for my `src/components/UserCard.tsx` file. Make sure it follows the exact theme requirements."

---

## 4. Example Interaction

Once connected, you can use the skills in your other project. Open your other project and ask your AI:

### Example 1: List Skills
> "What MUI component skills do I have access to via the 'minimal-mui' MCP?"

### Example 2: Create a Button
> "I need a 'Soft' variant Success button for my login page. Check the 'minimal-mui' skills for the 'buttons' design requirement and template, then implement it."

### Example 3: Create a Complex Alert
> "Analyze the 'alert' skill from the 'minimal-mui' MCP. Create a notification component for a data sync error following those guidelines."

---

## 4. How it Works (Under the Hood)
1. **The AI calls `list_mui_skills`**: It sees a list like `buttons`, `alert`, `textfield`, etc.
2. **The AI calls `get_mui_skill_details`**: It reads the `design-requirement.md` (spacing, colors) and `template.md` (code structure).
3. **Generation**: The AI writes code for your project that matches the Minimals UI system perfectly, instead of "hallucinating" generic MUI code.

---

## 5. Frequently Asked Questions

### Do I have to run `npm run start-mcp` every time?
**No.** If you have configured the server in your AI client's config file (like `claude_desktop_config.json` or VS Code MCP settings), the AI tool will **automatically start and stop** the server for you whenever you open the application. You do not need to keep a terminal open.

### When do I need to run manual commands?
You only need to run commands manually when:
1. **Initial Setup**: When you first download the project or after you pull new changes.
2. **Re-building**: If you modify any file in `src/` or add new skills, you must run `npm run build` so the changes reflect in the MCP server.
3. **Claude CLI**: If you are using the `claude` CLI via terminal, you must include the `--mcp` flag in your command each time you want to use the skills.
