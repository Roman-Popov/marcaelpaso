import { styled } from '@mui/material/styles';
import { Card } from '@mui/material';

export const StyledCard = styled(Card)(({ theme }) => theme.unstable_sx({
  px: { xs: 1, sm: 2 },
  '&:hover': {
    boxShadow: `0 0 0 2px inset ${theme.palette.divider}`,
    ...(theme.palette.mode === 'dark'
      ? { bgcolor: theme.palette.grey[900] }
      : { }
    ),
  },
}));
