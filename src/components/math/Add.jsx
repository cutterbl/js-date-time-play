import { Fragment } from 'react';
import { Temporal, toTemporalInstant } from '@js-temporal/polyfill';
import { buildDateFormatter } from '../../utilities';
Date.toTemporalInstant = toTemporalInstant;

const localFormatter = buildDateFormatter();

const oneMonth = Temporal.Duration.from({ months: 1 });

export function Add({ date, locale }) {
  const localeFormatter = buildDateFormatter(locale);

  const myDate = Temporal.Instant.from(date).toZonedDateTimeISO(
    locale.timeZone
  );
  const newDate = myDate.add(oneMonth);

  return (
    <Fragment>
      <span className="headings">local:</span>{' '}
      {localFormatter.format(new Date(myDate.epochMilliseconds))} + 1 month ={' '}
      {localFormatter.format(new Date(newDate.epochMilliseconds))}
      <br />
      <span className="headings">{locale.name}:</span>{' '}
      {localeFormatter.format(new Date(myDate.epochMilliseconds))} + 1 month ={' '}
      {localeFormatter.format(new Date(newDate.epochMilliseconds))}
    </Fragment>
  );
}
