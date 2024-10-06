import * as React from 'react';
import {
  Box, Container, Typography, Stack,
} from '@mui/material';

type SectionWrapperProps = {
  children: React.ReactNode,
  header: string,
  id: string,
};

const SectionWrapper = (props: SectionWrapperProps) => {
  const { header, id, children } = props;

  return (
    <Box>
      <Container maxWidth="md">
        <Stack>
          <Typography
            id={id}
            variant="h3"
            sx={{ textAlign: 'center', mb: 2, scrollMarginTop: { xs: '100px', sm: '120px' } }}
          >
            {header}
          </Typography>
          {children}
        </Stack>
      </Container>
    </Box>
  );
};

export const MemoizedSectionWrapper = React.memo(SectionWrapper);
