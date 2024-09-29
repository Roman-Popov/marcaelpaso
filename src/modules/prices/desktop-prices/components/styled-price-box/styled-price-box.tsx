import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const StyledPriceBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  margin: `${theme.typography.htmlFontSize / 4}px 0`,
  height: '3em',
}));
