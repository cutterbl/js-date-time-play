import { Fragment } from 'react';
import { Temporal, toTemporalInstant } from '@js-temporal/polyfill';
import { buildDateFormatter } from '../../utilities';
Date.toTemporalInstant = toTemporalInstant;

const localFormatter = buildDateFormatter();

const twentyTwoDays = Temporal.Duration.from({ days: 22 });

export function Subtract({ date, locale }) {
  const localeFormatter = buildDateFormatter(locale);

  const myDate = Temporal.Instant.from(date).toZonedDateTimeISO(
    locale.timeZone
  );
  const newDate = myDate.subtract(twentyTwoDays);

  return (
    <Fragment>
      <span className="headings">local:</span>{' '}
      {localFormatter.format(new Date(myDate.epochMilliseconds))} - 22 days ={' '}
      {localFormatter.format(new Date(newDate.epochMilliseconds))}
      <br />
      <span className="headings">{locale.name}:</span>{' '}
      {localeFormatter.format(new Date(myDate.epochMilliseconds))} - 22 days ={' '}
      {localeFormatter.format(new Date(newDate.epochMilliseconds))}
    </Fragment>
  );
}
