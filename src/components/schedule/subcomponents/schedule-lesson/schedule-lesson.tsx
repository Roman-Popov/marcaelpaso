import * as React from 'react';
import { Grid2 as Grid } from '@mui/material';
import type { LessonType } from '../../schedule-types';

const ScheduleLesson = (props: LessonType) => {
  const {
    from,
    to,
    what,
    who,
  } = props;

  return (
    <Grid
      columns={3}
      container
      size={4}
      spacing={2}
      sx={{
        py: 1,
        borderBottom: '1px solid',
        borderColor: 'dividerLight',
        '&:first-of-type': {
          pt: 0,
        },
        '&:last-of-type': {
          borderBottom: 'none',
          pb: 0,
        },
      }}
    >
      <Grid size={1}>{`${from}\u2009\u2013\u2009${to}`}</Grid>
      <Grid size={1}>{what}</Grid>
      <Grid size={1}>{who}</Grid>
    </Grid>
  );
};

export const MemoizedScheduleLesson = React.memo(ScheduleLesson);
