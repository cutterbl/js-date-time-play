import { Fragment } from 'react';
import { Temporal, toTemporalInstant } from '@js-temporal/polyfill';
import { buildDateFormatter } from '../../utilities';
Date.toTemporalInstant = toTemporalInstant;

export function JulyFourth({ date, locale }) {
  const localeFormatter = buildDateFormatter(locale);
  const numberFormatter = Intl.NumberFormat(locale.locale);

  const myDate = Temporal.Instant.from(date).toZonedDateTimeISO(
    locale.timeZone
  );
  const theFourth = Temporal.Now.zonedDateTimeISO(locale.timeZone).with({
    month: 7,
    day: 4,
  });

  const until = myDate.until(theFourth, { largestUnit: 'day' });

  return (
    <Fragment>
      It is {numberFormatter.format(until.days)} days,{' '}
      {numberFormatter.format(until.hours)} hours and{' '}
      {numberFormatter.format(until.minutes)} minutes until the{' '}
      {localeFormatter.format(new Date(theFourth.epochMilliseconds))} in "
      {locale.timeZone}"
    </Fragment>
  );
}
