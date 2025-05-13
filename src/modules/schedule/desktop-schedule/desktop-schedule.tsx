import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Grid2 as Grid } from '@mui/material';
import { Caption } from 'components/caption';
import { NoDataBlock } from 'components/no-data-block';
import { ScheduleDay } from './components/schedule-day';
import type { ScheduleDataType } from '../schedule-types';

type DesktopScheduleProps = {
  scheduleData: ScheduleDataType,
};

const DesktopSchedule = (props: DesktopScheduleProps) => {
  const { scheduleData } = props;

  const { t } = useTranslation();

  return (
    <Grid container columns={4} spacing={2} rowSpacing={1}>
      <Grid offset={1} size={1}>
        <Caption sx={{ textAlign: 'left' }}>{t('schedule.time')}</Caption>
      </Grid>
      <Grid size={1}>
        <Caption sx={{ textAlign: 'left' }}>{t('schedule.subject')}</Caption>
      </Grid>
      <Grid size={1}>
        <Caption sx={{ textAlign: 'left' }}>{t('schedule.teachers')}</Caption>
      </Grid>
      {
        scheduleData?.length
          ? scheduleData.map(({ weekday, lessons }) => (
            <ScheduleDay key={weekday} weekday={weekday} lessons={lessons} />
          ))
          : <NoDataBlock type={scheduleData ? 'loading' : 'error'} />
      }
    </Grid>
  );
};

export const MemoizedDesktopSchedule = React.memo(DesktopSchedule);
