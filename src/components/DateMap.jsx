import {
  defaultLocaleInfo,
  buildDateFormatter,
  buildTimeFormatter,
  buildDateTimeFormatter,
} from '../utilities';
import { dates } from '../data.json';

const types = {
  dates: buildDateFormatter,
  times: buildTimeFormatter,
  datetimes: buildDateTimeFormatter,
};

const { timeZone: defaultTimeZone } = defaultLocaleInfo;

export function DateMap({
  locale,
  type = 'dates',
  title = 'Dates',
  withTimeZone = false,
}) {
  const localDateFormatter = types[type]({ withTimeZone });
  const localeDateFormatter = types[type]({ ...locale, withTimeZone });

  return (
    <details>
      <summary className="headings">{title}</summary>
      <h5>
        Format {type} in local in "{defaultTimeZone}" and "{locale.locale}" in "
        {locale.timeZone}"
      </h5>
      {dates.map((date, ind) => (
        <details key={ind} style={{ paddingLeft: '1rem' }}>
          <summary>{date}</summary>
          <p style={{ paddingLeft: '1rem' }}>
            <span className="headings">local:</span>{' '}
            {localDateFormatter.format(new Date(date))}
            <br />
            <span className="headings">{locale.name}:</span>{' '}
            {localeDateFormatter?.format?.(new Date(date))}
          </p>
        </details>
      ))}
    </details>
  );
}
