# Accordion Component Templates - Minimal UI Style

Complete React component implementations for all accordion variants matching minimals.cc design system.

---

## Table of Contents
1. [Simple Accordion](#1-simple-accordion)
2. [Controlled Accordion](#2-controlled-accordion)
3. [Multi-Panel Accordion](#3-multi-panel-accordion)
4. [Disabled Accordion](#4-disabled-accordion)
5. [Plus Icon Accordion](#5-plus-icon-accordion)
6. [Styled Accordion (Minimal UI)](#6-styled-accordion-minimal-ui)
7. [Accordion with Actions](#7-accordion-with-actions)
8. [Complete Demo - All Variants](#8-complete-demo---all-variants)

---

## 1. Simple Accordion

Basic accordion with single panel expansion.

```jsx
import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        sx={{
          '&:before': {
            display: 'none',
          },
          border: '1px solid',
          borderColor: 'grey.300',
          boxShadow: 'none',
          '&.Mui-expanded': {
            margin: 0,
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'grey.600' }} />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            py: 2,
            px: 2.5,
            '&:hover': {
              bgcolor: 'grey.100',
            },
            '& .MuiAccordionSummary-content': {
              margin: 0,
            },
          }}
        >
          <Typography
            sx={{
              fontSize: '15px',
              fontWeight: 600,
              color: 'grey.800'
            }}
          >
            Accordion 1
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            px: 2.5,
            pb: 2.5,
            pt: 0,
          }}
        >
          <Typography
            sx={{
              fontSize: '14px',
              color: 'grey.600',
              lineHeight: 1.75
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
        sx={{
          '&:before': {
            display: 'none',
          },
          border: '1px solid',
          borderColor: 'grey.300',
          borderTop: 'none',
          boxShadow: 'none',
          '&.Mui-expanded': {
            margin: 0,
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'grey.600' }} />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{
            py: 2,
            px: 2.5,
            '&:hover': {
              bgcolor: 'grey.100',
            },
            '& .MuiAccordionSummary-content': {
              margin: 0,
            },
          }}
        >
          <Typography
            sx={{
              fontSize: '15px',
              fontWeight: 600,
              color: 'grey.800'
            }}
          >
            Accordion 2
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            px: 2.5,
            pb: 2.5,
            pt: 0,
          }}
        >
          <Typography
            sx={{
              fontSize: '14px',
              color: 'grey.600',
              lineHeight: 1.75
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
        sx={{
          '&:before': {
            display: 'none',
          },
          border: '1px solid',
          borderColor: 'grey.300',
          borderTop: 'none',
          boxShadow: 'none',
          '&.Mui-expanded': {
            margin: 0,
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'grey.600' }} />}
          aria-controls="panel3-content"
          id="panel3-header"
          sx={{
            py: 2,
            px: 2.5,
            '&:hover': {
              bgcolor: 'grey.100',
            },
            '& .MuiAccordionSummary-content': {
              margin: 0,
            },
          }}
        >
          <Typography
            sx={{
              fontSize: '15px',
              fontWeight: 600,
              color: 'grey.800'
            }}
          >
            Accordion 3
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            px: 2.5,
            pb: 2.5,
            pt: 0,
          }}
        >
          <Typography
            sx={{
              fontSize: '14px',
              color: 'grey.600',
              lineHeight: 1.75
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
```

---

## 2. Controlled Accordion

Accordion with external state control for programmatic manipulation.

```jsx
import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ControlledAccordion() {
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
        <Button
          variant="outlined"
          size="small"
          onClick={() => setExpanded('panel1')}
          sx={{ textTransform: 'none' }}
        >
          Open Panel 1
        </Button>
        <Button
          variant="outlined"
          size="small"
          onClick={() => setExpanded('panel2')}
          sx={{ textTransform: 'none' }}
        >
          Open Panel 2
        </Button>
        <Button
          variant="outlined"
          size="small"
          onClick={() => setExpanded(false)}
          sx={{ textTransform: 'none' }}
        >
          Close All
        </Button>
      </Stack>

      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        sx={{
          '&:before': { display: 'none' },
          border: '1px solid',
          borderColor: 'grey.300',
          boxShadow: 'none',
          '&.Mui-expanded': { margin: 0 },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'grey.600' }} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{
            py: 2,
            px: 2.5,
            '&:hover': { bgcolor: 'grey.100' },
            '& .MuiAccordionSummary-content': { margin: 0 },
          }}
        >
          <Typography sx={{ fontSize: '15px', fontWeight: 600, color: 'grey.800' }}>
            General Settings
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ px: 2.5, pb: 2.5, pt: 0 }}>
          <Typography sx={{ fontSize: '14px', color: 'grey.600', lineHeight: 1.75 }}>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam. This panel can be controlled
            programmatically using the buttons above.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
        sx={{
          '&:before': { display: 'none' },
          border: '1px solid',
          borderColor: 'grey.300',
          borderTop: 'none',
          boxShadow: 'none',
          '&.Mui-expanded': { margin: 0 },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'grey.600' }} />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          sx={{
            py: 2,
            px: 2.5,
            '&:hover': { bgcolor: 'grey.100' },
            '& .MuiAccordionSummary-content': { margin: 0 },
          }}
        >
          <Typography sx={{ fontSize: '15px', fontWeight: 600, color: 'grey.800' }}>
            Users
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ px: 2.5, pb: 2.5, pt: 0 }}>
          <Typography sx={{ fontSize: '14px', color: 'grey.600', lineHeight: 1.75 }}>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
        sx={{
          '&:before': { display: 'none' },
          border: '1px solid',
          borderColor: 'grey.300',
          borderTop: 'none',
          boxShadow: 'none',
          '&.Mui-expanded': { margin: 0 },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'grey.600' }} />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          sx={{
            py: 2,
            px: 2.5,
            '&:hover': { bgcolor: 'grey.100' },
            '& .MuiAccordionSummary-content': { margin: 0 },
          }}
        >
          <Typography sx={{ fontSize: '15px', fontWeight: 600, color: 'grey.800' }}>
            Advanced Settings
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ px: 2.5, pb: 2.5, pt: 0 }}>
          <Typography sx={{ fontSize: '14px', color: 'grey.600', lineHeight: 1.75 }}>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
```

---

## 3. Multi-Panel Accordion

Multiple panels can be expanded independently.

```jsx
import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function MultiAccordion() {
  const [expanded, setExpanded] = useState({
    panel1: false,
    panel2: false,
    panel3: false,
    panel4: false,
  });

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded((prev) => ({
      ...prev,
      [panel]: isExpanded,
    }));
  };

  const accordionSx = {
    '&:before': { display: 'none' },
    border: '1px solid',
    borderColor: 'grey.300',
    borderRadius: '8px',
    boxShadow: 'none',
    mb: 2,
    '&.Mui-expanded': {
      margin: '0 0 16px 0',
    },
  };

  const summarySx = {
    py: 2,
    px: 2.5,
    '&:hover': { bgcolor: 'grey.100' },
    '& .MuiAccordionSummary-content': { margin: 0 },
  };

  const detailsSx = {
    px: 2.5,
    pb: 2.5,
    pt: 0,
  };

  return (
    <div>
      <Accordion
        expanded={expanded.panel1}
        onChange={handleChange('panel1')}
        sx={accordionSx}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'grey.600' }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={summarySx}
        >
          <Typography sx={{ fontSize: '15px', fontWeight: 600, color: 'grey.800' }}>
            What is Minimal UI?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={detailsSx}>
          <Typography sx={{ fontSize: '14px', color: 'grey.600', lineHeight: 1.75 }}>
            Minimal is a professional React admin dashboard template built with Material-UI.
            It includes a modern, clean design with 50+ components and pages ready to use.
            Perfect for building admin panels, dashboards, and web applications.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded.panel2}
        onChange={handleChange('panel2')}
        sx={accordionSx}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'grey.600' }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={summarySx}
        >
          <Typography sx={{ fontSize: '15px', fontWeight: 600, color: 'grey.800' }}>
            What technologies does it use?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={detailsSx}>
          <Typography sx={{ fontSize: '14px', color: 'grey.600', lineHeight: 1.75 }}>
            Built with React 18, Material-UI v5, React Router, Redux Toolkit, and more modern
            technologies. Fully responsive and includes TypeScript support, authentication flows,
            and comprehensive documentation.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded.panel3}
        onChange={handleChange('panel3')}
        sx={accordionSx}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'grey.600' }} />}
          aria-controls="panel3a-content"
          id="panel3a-header"
          sx={summarySx}
        >
          <Typography sx={{ fontSize: '15px', fontWeight: 600, color: 'grey.800' }}>
            Can I use it for commercial projects?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={detailsSx}>
          <Typography sx={{ fontSize: '14px', color: 'grey.600', lineHeight: 1.75 }}>
            Yes! With the appropriate license, you can use Minimal for both personal and
            commercial projects. Check the licensing terms for detailed information about
            what's included and usage rights.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded.panel4}
        onChange={handleChange('panel4')}
        sx={accordionSx}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'grey.600' }} />}
          aria-controls="panel4a-content"
          id="panel4a-header"
          sx={summarySx}
        >
          <Typography sx={{ fontSize: '15px', fontWeight: 600, color: 'grey.800' }}>
            Is there support available?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={detailsSx}>
          <Typography sx={{ fontSize: '14px', color: 'grey.600', lineHeight: 1.75 }}>
            Yes, we provide dedicated support for our customers. You'll get access to our
            support portal, regular updates, bug fixes, and new features. We're committed
            to helping you build amazing applications.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
```

---

## 4. Disabled Accordion

Shows disabled state for non-interactive panels.

```jsx
import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function DisabledAccordion() {
  return (
    <div>
      <Accordion
        sx={{
          '&:before': { display: 'none' },
          border: '1px solid',
          borderColor: 'grey.300',
          boxShadow: 'none',
          '&.Mui-expanded': { margin: 0 },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'grey.600' }} />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            py: 2,
            px: 2.5,
            '&:hover': { bgcolor: 'grey.100' },
            '& .MuiAccordionSummary-content': { margin: 0 },
          }}
        >
          <Typography sx={{ fontSize: '15px', fontWeight: 600, color: 'grey.800' }}>
            Active Accordion
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ px: 2.5, pb: 2.5, pt: 0 }}>
          <Typography sx={{ fontSize: '14px', color: 'grey.600', lineHeight: 1.75 }}>
            This accordion is active and can be interacted with normally.
            Click to expand or collapse the content.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        disabled
        sx={{
          '&:before': { display: 'none' },
          border: '1px solid',
          borderColor: 'grey.300',
          borderTop: 'none',
          boxShadow: 'none',
          bgcolor: 'grey.200',
          opacity: 0.6,
          '&.Mui-expanded': { margin: 0 },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{
            py: 2,
            px: 2.5,
            cursor: 'not-allowed',
            '& .MuiAccordionSummary-content': { margin: 0 },
          }}
        >
          <Typography sx={{ fontSize: '15px', fontWeight: 600, color: 'grey.500' }}>
            Disabled Accordion
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ px: 2.5, pb: 2.5, pt: 0 }}>
          <Typography sx={{ fontSize: '14px', color: 'grey.500', lineHeight: 1.75 }}>
            This content is not accessible because the accordion is disabled.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          '&:before': { display: 'none' },
          border: '1px solid',
          borderColor: 'grey.300',
          borderTop: 'none',
          boxShadow: 'none',
          '&.Mui-expanded': { margin: 0 },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'grey.600' }} />}
          aria-controls="panel3-content"
          id="panel3-header"
          sx={{
            py: 2,
            px: 2.5,
            '&:hover': { bgcolor: 'grey.100' },
            '& .MuiAccordionSummary-content': { margin: 0 },
          }}
        >
          <Typography sx={{ fontSize: '15px', fontWeight: 600, color: 'grey.800' }}>
            Another Active Accordion
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ px: 2.5, pb: 2.5, pt: 0 }}>
          <Typography sx={{ fontSize: '14px', color: 'grey.600', lineHeight: 1.75 }}>
            This accordion is also active. The disabled state is useful for
            showing content that's temporarily unavailable or locked.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
```

---

## 5. Plus Icon Accordion

Uses plus/minus icons instead of chevron.

```jsx
import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function PlusIconAccordion() {
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const accordionSx = {
    '&:before': { display: 'none' },
    border: '1px solid',
    borderColor: 'grey.300',
    borderRadius: '8px',
    boxShadow: 'none',
    mb: 2,
    '&.Mui-expanded': {
      margin: '0 0 16px 0',
    },
  };

  const summarySx = {
    py: 2,
    px: 2.5,
    '&:hover': { bgcolor: 'grey.100' },
    '& .MuiAccordionSummary-content': { margin: 0 },
    '& .MuiAccordionSummary-expandIconWrapper': {
      transition: 'none',
    },
  };

  const detailsSx = {
    px: 2.5,
    pb: 2.5,
    pt: 0,
  };

  return (
    <div>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        sx={accordionSx}
      >
        <AccordionSummary
          expandIcon={
            expanded === 'panel1' ? (
              <RemoveIcon sx={{ color: 'grey.600', fontSize: '20px' }} />
            ) : (
              <AddIcon sx={{ color: 'grey.600', fontSize: '20px' }} />
            )
          }
          aria-controls="panel1-content"
          id="panel1-header"
          sx={summarySx}
        >
          <Typography sx={{ fontSize: '15px', fontWeight: 600, color: 'grey.800' }}>
            Features & Benefits
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={detailsSx}>
          <Typography sx={{ fontSize: '14px', color: 'grey.600', lineHeight: 1.75 }}>
            This accordion uses plus and minus icons for a cleaner, more modern look.
            The plus icon indicates you can expand, while the minus shows it's expanded.
            This style is popular in modern web design and provides clear visual feedback.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
        sx={accordionSx}
      >
        <AccordionSummary
          expandIcon={
            expanded === 'panel2' ? (
              <RemoveIcon sx={{ color: 'grey.600', fontSize: '20px' }} />
            ) : (
              <AddIcon sx={{ color: 'grey.600', fontSize: '20px' }} />
            )
          }
          aria-controls="panel2-content"
          id="panel2-header"
          sx={summarySx}
        >
          <Typography sx={{ fontSize: '15px', fontWeight: 600, color: 'grey.800' }}>
            Pricing & Plans
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={detailsSx}>
          <Typography sx={{ fontSize: '14px', color: 'grey.600', lineHeight: 1.75 }}>
            Choose from our flexible pricing plans designed to fit your needs.
            Whether you're a startup or enterprise, we have options that scale
            with your business.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
        sx={accordionSx}
      >
        <AccordionSummary
          expandIcon={
            expanded === 'panel3' ? (
              <RemoveIcon sx={{ color: 'grey.600', fontSize: '20px' }} />
            ) : (
              <AddIcon sx={{ color: 'grey.600', fontSize: '20px' }} />
            )
          }
          aria-controls="panel3-content"
          id="panel3-header"
          sx={summarySx}
        >
          <Typography sx={{ fontSize: '15px', fontWeight: 600, color: 'grey.800' }}>
            Technical Support
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={detailsSx}>
          <Typography sx={{ fontSize: '14px', color: 'grey.600', lineHeight: 1.75 }}>
            Our dedicated support team is here to help you succeed. Get access to
            documentation, video tutorials, and direct support channels.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
```

---

## 6. Styled Accordion (Minimal UI)

Premium styled accordion with shadows and refined design.

```jsx
import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';

export default function StyledAccordion() {
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const accordionSx = {
    '&:before': { display: 'none' },
    borderRadius: '12px',
    boxShadow: '0px 0px 2px 0px rgba(145, 158, 171, 0.2), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)',
    mb: 2,
    bgcolor: 'background.paper',
    border: 'none',
    '&.Mui-expanded': {
      margin: '0 0 16px 0',
    },
    '&:hover': {
      boxShadow: '0px 0px 2px 0px rgba(145, 158, 171, 0.24), 0px 16px 32px -4px rgba(145, 158, 171, 0.16)',
    },
    transition: 'box-shadow 200ms ease-in-out',
  };

  const summarySx = {
    py: 2.5,
    px: 3,
    '&:hover': {
      bgcolor: 'rgba(145, 158, 171, 0.04)',
    },
    '& .MuiAccordionSummary-content': {
      margin: 0,
    },
    '& .MuiAccordionSummary-expandIconWrapper': {
      color: 'grey.600',
      transition: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
  };

  const detailsSx = {
    px: 3,
    pb: 3,
    pt: 0,
  };

  return (
    <Box>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        sx={accordionSx}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={summarySx}
        >
          <Box>
            <Typography
              sx={{
                fontSize: '15px',
                fontWeight: 600,
                color: 'grey.800',
                mb: 0.5
              }}
            >
              Design System
            </Typography>
            <Typography
              sx={{
                fontSize: '13px',
                color: 'grey.600'
              }}
            >
              Comprehensive design guidelines and components
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails sx={detailsSx}>
          <Typography sx={{ fontSize: '14px', color: 'grey.600', lineHeight: 1.75, mb: 1.5 }}>
            Our design system provides a cohesive set of guidelines, components, and patterns
            that ensure consistency across your entire application.
          </Typography>
          <Typography sx={{ fontSize: '14px', color: 'grey.600', lineHeight: 1.75 }}>
            Built on Material-UI v5, it includes customizable themes, refined typography,
            consistent spacing, and a professional color palette inspired by Minimal UI.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
        sx={accordionSx}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={summarySx}
        >
          <Box>
            <Typography
              sx={{
                fontSize: '15px',
                fontWeight: 600,
                color: 'grey.800',
                mb: 0.5
              }}
            >
              Component Library
            </Typography>
            <Typography
              sx={{
                fontSize: '13px',
                color: 'grey.600'
              }}
            >
              50+ pre-built, customizable components
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails sx={detailsSx}>
          <Typography sx={{ fontSize: '14px', color: 'grey.600', lineHeight: 1.75, mb: 1.5 }}>
            Access a comprehensive library of production-ready components including
            data tables, forms, charts, calendars, and more.
          </Typography>
          <Typography sx={{ fontSize: '14px', color: 'grey.600', lineHeight: 1.75 }}>
            Each component is fully responsive, accessible, and built with best
            practices to ensure your application performs optimally.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
        sx={accordionSx}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          sx={summarySx}
        >
          <Box>
            <Typography
              sx={{
                fontSize: '15px',
                fontWeight: 600,
                color: 'grey.800',
                mb: 0.5
              }}
            >
              Documentation & Support
            </Typography>
            <Typography
              sx={{
                fontSize: '13px',
                color: 'grey.600'
              }}
            >
              Extensive docs and dedicated support team
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails sx={detailsSx}>
          <Typography sx={{ fontSize: '14px', color: 'grey.600', lineHeight: 1.75, mb: 1.5 }}>
            Get started quickly with our comprehensive documentation, code examples,
            and step-by-step guides.
          </Typography>
          <Typography sx={{ fontSize: '14px', color: 'grey.600', lineHeight: 1.75 }}>
            Our support team is available to help you with any questions or issues
            you may encounter during development.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
```

---

## 7. Accordion with Actions

Includes action buttons within the accordion panel.

```jsx
import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionActions from '@mui/material/AccordionActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export default function AccordionWithActions() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleSave = () => {
    alert('Settings saved!');
  };

  const handleCancel = () => {
    setExpanded(false);
  };

  const accordionSx = {
    '&:before': { display: 'none' },
    border: '1px solid',
    borderColor: 'grey.300',
    borderRadius: '8px',
    boxShadow: 'none',
    mb: 2,
    '&.Mui-expanded': {
      margin: '0 0 16px 0',
    },
  };

  return (
    <div>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        sx={accordionSx}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'grey.600' }} />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            py: 2,
            px: 2.5,
            '&:hover': { bgcolor: 'grey.100' },
            '& .MuiAccordionSummary-content': { margin: 0 },
          }}
        >
          <Typography sx={{ fontSize: '15px', fontWeight: 600, color: 'grey.800' }}>
            User Profile Settings
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ px: 2.5, pb: 0, pt: 0 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Full Name"
              variant="outlined"
              size="small"
              defaultValue="John Doe"
              fullWidth
            />
            <TextField
              label="Email Address"
              variant="outlined"
              size="small"
              defaultValue="john.doe@example.com"
              fullWidth
            />
            <TextField
              label="Phone Number"
              variant="outlined"
              size="small"
              defaultValue="+1 234 567 8900"
              fullWidth
            />
          </Box>
        </AccordionDetails>
        <AccordionActions sx={{ px: 2.5, py: 2, borderTop: '1px solid', borderColor: 'grey.200' }}>
          <Button
            size="small"
            onClick={handleCancel}
            sx={{
              textTransform: 'none',
              color: 'grey.600',
              '&:hover': { bgcolor: 'grey.100' }
            }}
          >
            Cancel
          </Button>
          <Button
            size="small"
            variant="contained"
            onClick={handleSave}
            sx={{
              textTransform: 'none',
              bgcolor: 'grey.800',
              '&:hover': { bgcolor: 'grey.900' }
            }}
          >
            Save Changes
          </Button>
        </AccordionActions>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
        sx={accordionSx}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'grey.600' }} />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{
            py: 2,
            px: 2.5,
            '&:hover': { bgcolor: 'grey.100' },
            '& .MuiAccordionSummary-content': { margin: 0 },
          }}
        >
          <Typography sx={{ fontSize: '15px', fontWeight: 600, color: 'grey.800' }}>
            Notification Preferences
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ px: 2.5, pb: 0, pt: 0 }}>
          <Typography sx={{ fontSize: '14px', color: 'grey.600', lineHeight: 1.75, mb: 2 }}>
            Choose how you want to receive notifications about updates, messages, and important events.
            You can customize your preferences at any time.
          </Typography>
        </AccordionDetails>
        <AccordionActions sx={{ px: 2.5, py: 2, borderTop: '1px solid', borderColor: 'grey.200' }}>
          <Button
            size="small"
            onClick={handleCancel}
            sx={{
              textTransform: 'none',
              color: 'grey.600',
              '&:hover': { bgcolor: 'grey.100' }
            }}
          >
            Cancel
          </Button>
          <Button
            size="small"
            variant="contained"
            onClick={handleSave}
            sx={{
              textTransform: 'none',
              bgcolor: 'grey.800',
              '&:hover': { bgcolor: 'grey.900' }
            }}
          >
            Update Preferences
          </Button>
        </AccordionActions>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
        sx={accordionSx}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'grey.600' }} />}
          aria-controls="panel3-content"
          id="panel3-header"
          sx={{
            py: 2,
            px: 2.5,
            '&:hover': { bgcolor: 'grey.100' },
            '& .MuiAccordionSummary-content': { margin: 0 },
          }}
        >
          <Typography sx={{ fontSize: '15px', fontWeight: 600, color: 'grey.800' }}>
            Security Settings
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ px: 2.5, pb: 0, pt: 0 }}>
          <Typography sx={{ fontSize: '14px', color: 'grey.600', lineHeight: 1.75, mb: 2 }}>
            Enhance your account security with two-factor authentication, session management,
            and other security features.
          </Typography>
        </AccordionDetails>
        <AccordionActions sx={{ px: 2.5, py: 2, borderTop: '1px solid', borderColor: 'grey.200' }}>
          <Button
            size="small"
            onClick={handleCancel}
            sx={{
              textTransform: 'none',
              color: 'grey.600',
              '&:hover': { bgcolor: 'grey.100' }
            }}
          >
            Cancel
          </Button>
          <Button
            size="small"
            variant="contained"
            onClick={handleSave}
            sx={{
              textTransform: 'none',
              bgcolor: 'grey.800',
              '&:hover': { bgcolor: 'grey.900' }
            }}
          >
            Apply Settings
          </Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
}
```

---

## 8. Complete Demo - All Variants

Combined component showcasing all accordion variants.

```jsx
import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AccordionActions,
  Typography,
  Button,
  TextField,
  Box,
  Divider,
  Container,
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  Add as AddIcon,
  Remove as RemoveIcon,
} from '@mui/icons-material';

export default function AllAccordionVariants() {
  // Simple accordion state
  const [simpleExpanded, setSimpleExpanded] = useState('panel1');

  // Controlled accordion state
  const [controlledExpanded, setControlledExpanded] = useState('panel1');

  // Multi accordion state
  const [multiExpanded, setMultiExpanded] = useState({
    panel1: false,
    panel2: false,
    panel3: false,
  });

  // Plus icon accordion state
  const [plusExpanded, setPlusExpanded] = useState('panel1');

  // Styled accordion state
  const [styledExpanded, setStyledExpanded] = useState('panel1');

  // Actions accordion state
  const [actionsExpanded, setActionsExpanded] = useState(false);

  // Handlers
  const handleSimpleChange = (panel) => (event, isExpanded) => {
    setSimpleExpanded(isExpanded ? panel : false);
  };

  const handleControlledChange = (panel) => (event, isExpanded) => {
    setControlledExpanded(isExpanded ? panel : false);
  };

  const handleMultiChange = (panel) => (event, isExpanded) => {
    setMultiExpanded((prev) => ({
      ...prev,
      [panel]: isExpanded,
    }));
  };

  const handlePlusChange = (panel) => (event, isExpanded) => {
    setPlusExpanded(isExpanded ? panel : false);
  };

  const handleStyledChange = (panel) => (event, isExpanded) => {
    setStyledExpanded(isExpanded ? panel : false);
  };

  const handleActionsChange = (panel) => (event, isExpanded) => {
    setActionsExpanded(isExpanded ? panel : false);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Section: Simple Accordion */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" sx={{ mb: 1, fontWeight: 600, color: 'grey.800' }}>
          1. Simple Accordion
        </Typography>
        <Typography sx={{ mb: 3, color: 'grey.600', fontSize: '14px' }}>
          Basic accordion with single panel expansion
        </Typography>

        <Box>
          <Accordion
            expanded={simpleExpanded === 'panel1'}
            onChange={handleSimpleChange('panel1')}
            sx={{
              '&:before': { display: 'none' },
              border: '1px solid',
              borderColor: 'grey.300',
              boxShadow: 'none',
              '&.Mui-expanded': { margin: 0 },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'grey.600' }} />}
              sx={{
                py: 2,
                px: 2.5,
                '&:hover': { bgcolor: 'grey.100' },
                '& .MuiAccordionSummary-content': { margin: 0 },
              }}
            >
              <Typography sx={{ fontSize: '15px', fontWeight: 600, color: 'grey.800' }}>
                Accordion 1
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 2.5, pb: 2.5, pt: 0 }}>
              <Typography sx={{ fontSize: '14px', color: 'grey.600', lineHeight: 1.75 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={simpleExpanded === 'panel2'}
            onChange={handleSimpleChange('panel2')}
            sx={{
              '&:before': { display: 'none' },
              border: '1px solid',
              borderColor: 'grey.300',
              borderTop: 'none',
              boxShadow: 'none',
              '&.Mui-expanded': { margin: 0 },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'grey.600' }} />}
              sx={{
                py: 2,
                px: 2.5,
                '&:hover': { bgcolor: 'grey.100' },
                '& .MuiAccordionSummary-content': { margin: 0 },
              }}
            >
              <Typography sx={{ fontSize: '15px', fontWeight: 600, color: 'grey.800' }}>
                Accordion 2
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 2.5, pb: 2.5, pt: 0 }}>
              <Typography sx={{ fontSize: '14px', color: 'grey.600', lineHeight: 1.75 }}>
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* Section: Controlled Accordion */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" sx={{ mb: 1, fontWeight: 600, color: 'grey.800' }}>
          2. Controlled Accordion
        </Typography>
        <Typography sx={{ mb: 3, color: 'grey.600', fontSize: '14px' }}>
          Programmatically control which panel is expanded
        </Typography>

        <Box sx={{ mb: 2, display: 'flex', gap: 2 }}>
          <Button
            variant="outlined"
            size="small"
            onClick={() => setControlledExpanded('panel1')}
            sx={{ textTransform: 'none' }}
          >
            Open Panel 1
          </Button>
          <Button
            variant="outlined"
            size="small"
            onClick={() => setControlledExpanded('panel2')}
            sx={{ textTransform: 'none' }}
          >
            Open Panel 2
          </Button>
          <Button
            variant="outlined"
            size="small"
            onClick={() => setControlledExpanded(false)}
            sx={{ textTransform: 'none' }}
          >
            Close All
          </Button>
        </Box>

        <Accordion
          expanded={controlledExpanded === 'panel1'}
          onChange={handleControlledChange('panel1')}
          sx={{
            '&:before': { display: 'none' },
            border: '1px solid',
            borderColor: 'grey.300',
            boxShadow: 'none',
            '&.Mui-expanded': { margin: 0 },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: 'grey.600' }} />}
            sx={{
              py: 2,
              px: 2.5,
              '&:hover': { bgcolor: 'grey.100' },
              '& .MuiAccordionSummary-content': { margin: 0 },
            }}
          >
            <Typography sx={{ fontSize: '15px', fontWeight: 600, color: 'grey.800' }}>
              General Settings
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ px: 2.5, pb: 2.5, pt: 0 }}>
            <Typography sx={{ fontSize: '14px', color: 'grey.600', lineHeight: 1.75 }}>
              This panel can be controlled programmatically using the buttons above.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={controlledExpanded === 'panel2'}
          onChange={handleControlledChange('panel2')}
          sx={{
            '&:before': { display: 'none' },
            border: '1px solid',
            borderColor: 'grey.300',
            borderTop: 'none',
            boxShadow: 'none',
            '&.Mui-expanded': { margin: 0 },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: 'grey.600' }} />}
            sx={{
              py: 2,
              px: 2.5,
              '&:hover': { bgcolor: 'grey.100' },
              '& .MuiAccordionSummary-content': { margin: 0 },
            }}
          >
            <Typography sx={{ fontSize: '15px', fontWeight: 600, color: 'grey.800' }}>
              Users
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ px: 2.5, pb: 2.5, pt: 0 }}>
            <Typography sx={{ fontSize: '14px', color: 'grey.600', lineHeight: 1.75 }}>
              Manage user settings and permissions.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* Section: Multi-Panel Accordion */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" sx={{ mb: 1, fontWeight: 600, color: 'grey.800' }}>
          3. Multi-Panel Accordion
        </Typography>
        <Typography sx={{ mb: 3, color: 'grey.600', fontSize: '14px' }}>
          Multiple panels can be expanded simultaneously
        </Typography>

        {['panel1', 'panel2', 'panel3'].map((panel, index) => (
          <Accordion
            key={panel}
            expanded={multiExpanded[panel]}
            onChange={handleMultiChange(panel)}
            sx={{
              '&:before': { display: 'none' },
              border: '1px solid',
              borderColor: 'grey.300',
              borderRadius: '8px',
              boxShadow: 'none',
              mb: 2,
              '&.Mui-expanded': { margin: '0 0 16px 0' },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'grey.600' }} />}
              sx={{
                py: 2,
                px: 2.5,
                '&:hover': { bgcolor: 'grey.100' },
                '& .MuiAccordionSummary-content': { margin: 0 },
              }}
            >
              <Typography sx={{ fontSize: '15px', fontWeight: 600, color: 'grey.800' }}>
                Panel {index + 1}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 2.5, pb: 2.5, pt: 0 }}>
              <Typography sx={{ fontSize: '14px', color: 'grey.600', lineHeight: 1.75 }}>
                This is panel {index + 1}. Multiple panels can be open at the same time.
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* Section: Disabled Accordion */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" sx={{ mb: 1, fontWeight: 600, color: 'grey.800' }}>
          4. Disabled Accordion
        </Typography>
        <Typography sx={{ mb: 3, color: 'grey.600', fontSize: '14px' }}>
          Shows disabled state for non-interactive panels
        </Typography>

        <Accordion
          sx={{
            '&:before': { display: 'none' },
            border: '1px solid',
            borderColor: 'grey.300',
            boxShadow: 'none',
            '&.Mui-expanded': { margin: 0 },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: 'grey.600' }} />}
            sx={{
              py: 2,
              px: 2.5,
              '&:hover': { bgcolor: 'grey.100' },
              '& .MuiAccordionSummary-content': { margin: 0 },
            }}
          >
            <Typography sx={{ fontSize: '15px', fontWeight: 600, color: 'grey.800' }}>
              Active Accordion
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ px: 2.5, pb: 2.5, pt: 0 }}>
            <Typography sx={{ fontSize: '14px', color: 'grey.600', lineHeight: 1.75 }}>
              This accordion is active and interactive.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          disabled
          sx={{
            '&:before': { display: 'none' },
            border: '1px solid',
            borderColor: 'grey.300',
            borderTop: 'none',
            boxShadow: 'none',
            bgcolor: 'grey.200',
            opacity: 0.6,
            '&.Mui-expanded': { margin: 0 },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{
              py: 2,
              px: 2.5,
              cursor: 'not-allowed',
              '& .MuiAccordionSummary-content': { margin: 0 },
            }}
          >
            <Typography sx={{ fontSize: '15px', fontWeight: 600, color: 'grey.500' }}>
              Disabled Accordion
            </Typography>
          </AccordionSummary>
        </Accordion>
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* Section: Plus Icon Accordion */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" sx={{ mb: 1, fontWeight: 600, color: 'grey.800' }}>
          5. Plus Icon Accordion
        </Typography>
        <Typography sx={{ mb: 3, color: 'grey.600', fontSize: '14px' }}>
          Uses plus/minus icons instead of chevron
        </Typography>

        {['panel1', 'panel2'].map((panel, index) => (
          <Accordion
            key={panel}
            expanded={plusExpanded === panel}
            onChange={handlePlusChange(panel)}
            sx={{
              '&:before': { display: 'none' },
              border: '1px solid',
              borderColor: 'grey.300',
              borderRadius: '8px',
              boxShadow: 'none',
              mb: 2,
              '&.Mui-expanded': { margin: '0 0 16px 0' },
            }}
          >
            <AccordionSummary
              expandIcon={
                plusExpanded === panel ? (
                  <RemoveIcon sx={{ color: 'grey.600', fontSize: '20px' }} />
                ) : (
                  <AddIcon sx={{ color: 'grey.600', fontSize: '20px' }} />
                )
              }
              sx={{
                py: 2,
                px: 2.5,
                '&:hover': { bgcolor: 'grey.100' },
                '& .MuiAccordionSummary-content': { margin: 0 },
                '& .MuiAccordionSummary-expandIconWrapper': {
                  transition: 'none',
                },
              }}
            >
              <Typography sx={{ fontSize: '15px', fontWeight: 600, color: 'grey.800' }}>
                Accordion {index + 1}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 2.5, pb: 2.5, pt: 0 }}>
              <Typography sx={{ fontSize: '14px', color: 'grey.600', lineHeight: 1.75 }}>
                This accordion uses plus and minus icons for expansion.
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* Section: Styled Accordion */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" sx={{ mb: 1, fontWeight: 600, color: 'grey.800' }}>
          6. Styled Accordion (Minimal UI)
        </Typography>
        <Typography sx={{ mb: 3, color: 'grey.600', fontSize: '14px' }}>
          Premium styled with shadows and refined design
        </Typography>

        <Accordion
          expanded={styledExpanded === 'panel1'}
          onChange={handleStyledChange('panel1')}
          sx={{
            '&:before': { display: 'none' },
            borderRadius: '12px',
            boxShadow: '0px 0px 2px 0px rgba(145, 158, 171, 0.2), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)',
            mb: 2,
            bgcolor: 'background.paper',
            border: 'none',
            '&.Mui-expanded': { margin: '0 0 16px 0' },
            '&:hover': {
              boxShadow: '0px 0px 2px 0px rgba(145, 158, 171, 0.24), 0px 16px 32px -4px rgba(145, 158, 171, 0.16)',
            },
            transition: 'box-shadow 200ms ease-in-out',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{
              py: 2.5,
              px: 3,
              '&:hover': { bgcolor: 'rgba(145, 158, 171, 0.04)' },
              '& .MuiAccordionSummary-content': { margin: 0 },
            }}
          >
            <Box>
              <Typography sx={{ fontSize: '15px', fontWeight: 600, color: 'grey.800', mb: 0.5 }}>
                Design System
              </Typography>
              <Typography sx={{ fontSize: '13px', color: 'grey.600' }}>
                Comprehensive design guidelines
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
            <Typography sx={{ fontSize: '14px', color: 'grey.600', lineHeight: 1.75 }}>
              Our design system provides cohesive guidelines, components, and patterns
              for your entire application.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* Section: Accordion with Actions */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" sx={{ mb: 1, fontWeight: 600, color: 'grey.800' }}>
          7. Accordion with Actions
        </Typography>
        <Typography sx={{ mb: 3, color: 'grey.600', fontSize: '14px' }}>
          Includes action buttons within the panel
        </Typography>

        <Accordion
          expanded={actionsExpanded === 'panel1'}
          onChange={handleActionsChange('panel1')}
          sx={{
            '&:before': { display: 'none' },
            border: '1px solid',
            borderColor: 'grey.300',
            borderRadius: '8px',
            boxShadow: 'none',
            '&.Mui-expanded': { margin: 0 },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: 'grey.600' }} />}
            sx={{
              py: 2,
              px: 2.5,
              '&:hover': { bgcolor: 'grey.100' },
              '& .MuiAccordionSummary-content': { margin: 0 },
            }}
          >
            <Typography sx={{ fontSize: '15px', fontWeight: 600, color: 'grey.800' }}>
              Profile Settings
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ px: 2.5, pb: 0, pt: 0 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                label="Full Name"
                variant="outlined"
                size="small"
                defaultValue="John Doe"
                fullWidth
              />
              <TextField
                label="Email"
                variant="outlined"
                size="small"
                defaultValue="john@example.com"
                fullWidth
              />
            </Box>
          </AccordionDetails>
          <AccordionActions sx={{ px: 2.5, py: 2, borderTop: '1px solid', borderColor: 'grey.200' }}>
            <Button
              size="small"
              sx={{
                textTransform: 'none',
                color: 'grey.600',
                '&:hover': { bgcolor: 'grey.100' }
              }}
            >
              Cancel
            </Button>
            <Button
              size="small"
              variant="contained"
              sx={{
                textTransform: 'none',
                bgcolor: 'grey.800',
                '&:hover': { bgcolor: 'grey.900' }
              }}
            >
              Save
            </Button>
          </AccordionActions>
        </Accordion>
      </Box>
    </Container>
  );
}
```

---

## Usage Instructions

### Installation

```bash
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
```

### Import and Use

```jsx
import SimpleAccordion from './components/SimpleAccordion';
import StyledAccordion from './components/StyledAccordion';
import AllAccordionVariants from './components/AllAccordionVariants';

function App() {
  return (
    <div>
      <SimpleAccordion />
      {/* or */}
      <StyledAccordion />
      {/* or see all variants */}
      <AllAccordionVariants />
    </div>
  );
}
```

### Customization

#### Change Colors
```jsx
// Primary color
sx={{ bgcolor: '#00A76F' }}

// Text color
sx={{ color: '#212B36' }}
```

#### Adjust Spacing
```jsx
// Padding
sx={{ py: 3, px: 4 }}

// Margin
sx={{ mb: 3 }}
```

#### Modify Border Radius
```jsx
sx={{ borderRadius: '16px' }}
```

#### Custom Shadows
```jsx
sx={{
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)'
}}
```

---

## Notes

- All components use MUI v5 syntax
- Follows Minimal UI design system
- Fully accessible with ARIA attributes
- Keyboard navigation supported
- Responsive and mobile-friendly
- TypeScript compatible (add types as needed)
- Production-ready code

## Related Components

- Alert
- Dialog
- Drawer
- Paper
- Card
