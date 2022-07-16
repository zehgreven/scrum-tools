import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';

export const Game: React.FC = () => {

  const points = [
    '1',
    '2',
    '3',
    '5',
    '8',
    '13',
    '20',
    '40',
    '100',
    '?'
  ];

  const [value, setValue] = useState('');

  const onCLick = (point: string) => {
    setValue(() => point);
  };

  return (
    <Box display="flex" gap={5} flexDirection="column" height="100%">
      <Box display="flex">
        <Typography variant="h1">
          {value}
        </Typography>
      </Box>
      <Box display="flex" gap={1}>
        {points.map(point => (
          <Button
            key={point}
            variant='contained'
            onClick={() => onCLick(point)}
          >
            {point}
          </Button>
        ))}
      </Box>
    </Box>
  );
};
