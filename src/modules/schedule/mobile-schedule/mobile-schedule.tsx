import * as React from 'react';
import {
  Card,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import type { ScheduleDataType } from '../schedule-types';
import { NoDataBlock } from '../components/no-data-block';

type MobileScheduleProps = {
  scheduleData: ScheduleDataType,
};

const MobileSchedule = (props: MobileScheduleProps) => {
  const { scheduleData } = props;

  const { t } = useTranslation();

  return (
    <Stack spacing={2.5}>
      {
        scheduleData?.length
          ? scheduleData.map(({ weekday, lessons }) => (
            <Stack spacing={0.5}>
              <Typography fontWeight="bold" fontSize="1.15em" textAlign="center">
                {t(`weekdays.${weekday}`)}
              </Typography>
              <Card
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
                <Stack spacing={2} divider={<Divider />}>
                  {lessons.map(({
                    from,
                    to,
                    what,
                    who,
                  }) => (
                    <Stack
                      direction="row"
                      divider={<Divider orientation="vertical" flexItem />}
                      spacing={{ xs: 1, sm: 2 }}
                      sx={{ px: { xs: 1, sm: 2 } }}
                    >
                      <Typography sx={{
                        fontVariant: 'tabular-nums',
                        flexShrink: 0,
                        display: 'flex',
                        alignItems: 'center',
                      }}
                      >
                        {`${from}\u2009\u2013\u2009${to}`}
                      </Typography>
                      <Stack>
                        <Typography>
                          {what}
                        </Typography>
                        <Typography>
                          {`${who.includes(',') ? t('schedule.teachers') : t('schedule.teacher')}: ${who}`}
                        </Typography>
                      </Stack>
                    </Stack>
                  ))}
                </Stack>
              </Card>
            </Stack>
          ))
          : <NoDataBlock type={scheduleData ? 'loading' : 'error'} />
      }
    </Stack>
  );
};

export const MemoizedMobileSchedule = React.memo(MobileSchedule);
