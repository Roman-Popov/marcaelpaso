import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, Grid2 as Grid, Typography } from '@mui/material';
import type { LessonType } from '../../../schedule-types';
import { ScheduleLesson } from '../schedule-lesson';

type ScheduleDayProps = {
  lessons: LessonType[],
  weekday: string,
};

const ScheduleDay = (props: ScheduleDayProps) => {
  const { lessons, weekday } = props;

  const { t } = useTranslation();

  return (
    <Grid
      columns={4}
      container
      size={4}
      spacing={2}
      component={Card}
      variant="outlined"
      sx={[
        { px: 0 },
        (theme) => ({
          '&:hover': {
            boxShadow: `0 0 0 2px inset ${theme.palette.divider}`,
            ...(theme.palette.mode === 'dark'
              ? { bgcolor: theme.palette.grey[900] }
              : { }
            ),
          },
        }),
      ]}
    >
      <Grid
        size={1}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRight: '1px solid',
          borderColor: 'dividerLight',
        }}
      >
        <Typography
          fontWeight="bold"
          fontSize="1.15em"
        >
          {t(`weekdays.${weekday}`)}
        </Typography>
      </Grid>
      <Grid container size={3} rowSpacing={0}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading, react/no-array-index-key */}
        {lessons.map((lesson, i) => <ScheduleLesson {...lesson} key={i} />)}
      </Grid>
    </Grid>
  );
};

export const MemoizedScheduleDay = React.memo(ScheduleDay);
