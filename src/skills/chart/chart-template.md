# Chart Component Template

```jsx
import React from 'react';
import Chart from 'react-apexcharts';
import { Box, Card, Typography } from '@mui/material';

export default function ApexLineChartTemplate() {
  const series = [
    {
      name: 'Series 1',
      data: [10, 25, 18, 40, 32, 55, 48],
    },
  ];

  const options = {
    chart: {
      type: 'line',
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    stroke: {
      curve: 'smooth',
      width: 3,
    },
    colors: ['#2563EB'],
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      labels: {
        style: {
          fontSize: '12px',
          colors: '#6B7280',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: '12px',
          colors: '#6B7280',
        },
      },
    },
    grid: {
      borderColor: '#E5E7EB',
      strokeDashArray: 4,
    },
    tooltip: {
      theme: 'light',
    },
    legend: {
      show: false,
    },
  };

  return (
    <Card
      sx={{
        p: 2,
        borderRadius: 2,
        boxShadow: '0px 2px 6px rgba(0,0,0,0.06)',
      }}
    >
      <Typography fontSize={16} fontWeight={600} mb={2}>
        Line Chart Example
      </Typography>

      <Box>
        <Chart options={options} series={series} type="line" height={250} />
      </Box>
    </Card>
  );
}
```
