import React, { useEffect, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Card,
  CardContent,
  Container,
  Grid2 as Grid,
  Typography,
} from '@mui/material';
import { sortBy } from 'lodash';
import { configureRequest, type MaybeCancelError } from '../../utils/configure-request';
import { ScheduleDay } from './subcomponents/schedule-day';
import { NoDataBlock } from './subcomponents/no-data-block';
import { SCHEDULE_ENDPOINT } from './schedule-endpoint';
import type { RawScheduleType, LessonType } from './schedule-types';

const weekdayKeys = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'] as WeekdayType[];

const Schedule = () => {
  const [rawScheduleData, setRawScheduleData] = useState<RawScheduleType | null>({} as RawScheduleType);

  useEffect(() => {
    const { sendMessage, cancel } = configureRequest();

    const fetchData = async () => {
      try {
        const { data } = await sendMessage({ endpoint: SCHEDULE_ENDPOINT });

        setRawScheduleData(data);
      } catch (error) {
        if (!(error as MaybeCancelError).isCanceled) {
          setRawScheduleData(null);
        }
      }
    };

    fetchData();
    return () => {
      cancel();
    };
  }, []);

  const { t, i18n } = useTranslation();
  const selectedLanguage = i18n.language.split('-')[0] as LanguageType;
  const scheduleData = useMemo(() => {
    if (!rawScheduleData) {
      return null;
    }

    return weekdayKeys.reduce((result: ({ weekday: WeekdayType, lessons: LessonType[] })[], weekday) => {
      const rawWeekdayData = rawScheduleData[weekday];
      if (rawWeekdayData) {
        const formattedLessonsData = rawWeekdayData.map((rawLessonData) => {
          const {
            from,
            to,
            what,
            who,
          } = rawLessonData;
          const translatedWhat = what[selectedLanguage];
          const translatedWho = who[selectedLanguage];
          const computedWho = Array.isArray(translatedWho) ? translatedWho.join(', ') : translatedWho;

          return {
            from,
            to,
            what: translatedWhat,
            who: computedWho,
          };
        });

        if (formattedLessonsData.length) {
          result.push({ weekday, lessons: sortBy(formattedLessonsData, ['from']) });
        }
      }
      return result;
    }, []);
  }, [rawScheduleData, selectedLanguage]);

  return (
    <Container maxWidth="md">
      <Card>
        <CardContent>
          <Grid container columns={4} spacing={2} rowSpacing={1}>
            <Grid offset={1} size={1}>
              <Typography fontWeight="bold" fontSize="1.15em">
                {t('schedule.time')}
              </Typography>
            </Grid>
            <Grid size={1}>
              <Typography fontWeight="bold" fontSize="1.15em">
                {t('schedule.subject')}
              </Typography>
            </Grid>
            <Grid size={1}>
              <Typography fontWeight="bold" fontSize="1.15em">
                {t('schedule.teachers')}
              </Typography>
            </Grid>
            {
              scheduleData?.length
                ? scheduleData.map(({ weekday, lessons }) => (
                  <ScheduleDay key={weekday} weekday={weekday} lessons={lessons} />
                ))
                : <NoDataBlock type={scheduleData ? 'loading' : 'error'} />
            }
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export const MemoizedSchedule = React.memo(Schedule);
