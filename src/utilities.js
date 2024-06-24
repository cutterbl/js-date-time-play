export const defaultLocaleInfo = new Intl.DateTimeFormat().resolvedOptions();

const {
  calendar: defaultCalendar,
  locale: defaultLocale,
  timeZone: defaultTimeZone,
} = defaultLocaleInfo;

export function buildFormatter({
  locale = defaultLocale,
  calendar = defaultCalendar,
  timeZone = defaultTimeZone,
  withTimeZone = false,
  options = {},
} = {}) {
  const { timeZoneName = 'shortGeneric', ...other } = options;

  return new Intl.DateTimeFormat(locale, {
    ...other,
    calendar,
    timeZone,
    ...(withTimeZone && { timeZoneName: 'shortGeneric' }),
  });
}

export function buildDateFormatter({
  locale = defaultLocale,
  calendar = defaultCalendar,
  timeZone = defaultTimeZone,
  options = {},
} = {}) {
  return buildFormatter({
    locale,
    calendar,
    timeZone,
    options: {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      ...options,
    },
  });
}

export function buildTimeFormatter({
  locale = defaultLocale,
  calendar = defaultCalendar,
  timeZone = defaultTimeZone,
  withTimeZone = false,
  options = {},
} = {}) {
  return buildFormatter({
    locale,
    calendar,
    timeZone,
    withTimeZone,
    options: {
      hour: '2-digit',
      minute: '2-digit',
      ...options,
    },
  });
}

export function buildDateTimeFormatter({
  locale = defaultLocale,
  calendar = defaultCalendar,
  timeZone = defaultTimeZone,
  withTimeZone = false,
  options = {},
} = {}) {
  return buildFormatter({
    locale,
    calendar,
    timeZone,
    withTimeZone,
    options: {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      ...options,
    },
  });
}
