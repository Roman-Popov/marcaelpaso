type RawLessonType = {
  from: string,
  to: string,
  what: {
    en: string,
    es: string,
    ru: string,
  },
  who: {
    en: string | string[],
    es: string | string[],
    ru: string | string[],
  },
};

export type RawScheduleType = {
  [key in WeekdayType]: RawLessonType[]
};

export type LessonType = {
  from: string,
  to: string,
  what: string,
  who: string,
};

export type ScheduleDataType = null | {
  weekday: WeekdayType,
  lessons: LessonType[]
}[];
