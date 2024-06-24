import { Fragment } from 'react';
import { Temporal, toTemporalInstant } from '@js-temporal/polyfill';
import { buildDateFormatter } from '../../utilities';
Date.toTemporalInstant = toTemporalInstant;

const localFormatter = buildDateFormatter();

export function Since({ date, locale }) {
  const localeFormatter = buildDateFormatter(locale);
  const numberFormatter = Intl.NumberFormat(locale.locale);

  const myDate = Temporal.Instant.from(date).toZonedDateTimeISO(
    locale.timeZone
  );

  const firstOfMonth = myDate.with({ day: 1 });

  const since = myDate.since(firstOfMonth, { smallestUnit: 'day' });

  return (
    <Fragment>
      It is {numberFormatter.format(since.days)} days since the{' '}
      {localeFormatter.format(new Date(firstOfMonth.epochMilliseconds))} in "
      {locale.timeZone}"
    </Fragment>
  );
}
