import { Temporal } from "@js-temporal/polyfill";
import {defaultLocaleInfo} from '../utilities';

const {locale, timeZone} = defaultLocaleInfo;

const myLocale = new Intl.Locale(locale);

const weekInfo = myLocale.getWeekInfo ? myLocale.getWeekInfo(): myLocale.weekInfo;

const {firstDay, weekend, minimalDays} = weekInfo;

function formatDay(day) {
  const myDate = new Date(day.toZonedDateTime(timeZone).epochMilliseconds);
  return new Intl.DateTimeFormat(locale, {
    weekday: 'long'
  }).format(myDate);
}

function moveToDayOfWeek(date, targetDayOfWeek) {
  // Current day of the week (1-7, where 1 is Monday and 7 is Sunday)
  const currentDayOfWeek = date.dayOfWeek;

  // Calculate the difference to the target day
  let daysUntilTarget = targetDayOfWeek - currentDayOfWeek;
  if (daysUntilTarget <= 0) {
    daysUntilTarget += 7; // Ensure it's always a future date
  }

  // Add the necessary days to reach the target day of the week
  const targetDate = date.add({ days: daysUntilTarget });

  return targetDate;
}

const now = Temporal.Now.plainDateISO();
const firstOfWeek = moveToDayOfWeek(now, firstDay);
const myWeekend = weekend.map((day) => moveToDayOfWeek(now, day));

console.log('stuff', {firstOfWeek, myWeekend})

export function Step6() {
  return (
    <div>
      <h1>When Is The First of the Week?</h1>
      <p style={{ marginTop: '1rem' }}>
        One thing that is still a challenge is getting the first day of the
        week. The <code className="inline">Intl.Locale API</code> is supposed to
        address this with the <code className="inline">getWeekInfo()</code>{' '}
        method. This is not yet fully implemented (thanks Firefox), and is a
        little different among browsers.
      </p>
      <p style={{ marginTop: '1rem' }}>
        Currently only Safari (surprisingly) properly implements{' '}
        <code className="inline">getWeekInfo()</code>, while all other browsers
        have the data available via a <code className="inline">weekInfo</code>{' '}
        accessor (except Firefox).
      </p>
      <details style={{ marginTop: '.5rem' }}>
        <summary className="headings">
        <code className="inline">weekInfo</code> provides:
        </summary>
        <ul style={{ listStyle: 'circle', listStylePosition: 'inside' }}>
        <li>
          <span className="headings">firstDay</span> - An integer between 1
          (Monday) and 7 (Sunday) indicating the first day of the week for the
          locale. Commonly 1, 5, 6, or 7.
        </li>
        <li>
          <span className="headings">weekend</span> - An array of integers between
          1 and 7 indicating the weekend days for the locale. This is usually
          continuous because UTS 35 stores weekendStart and weekendEnd instead.
        </li>
        <li>
        <span className="headings">minimalDays</span> - An integer between 1 and
          7 (commonly 1 and 4) indicating the minimal days required in the first
          week of a month or year, for week-of-year or week-of-month
          calculations (e.g. The 20th week of the year). For example, in the ISO
          8601 calendar, the first week of a year must have at least 4 days in
          this year, so if January 1 is a Friday, Saturday, or Sunday, it will
          be numbered as part of the last week of the previous year.
        </li>
      </ul>
      </details>
      <details style={{ marginTop: '.5rem' }}>
        <summary className="headings">
          My <code className="inline">weekInfo</code>
        </summary>
        <ul style={{ listStyle: 'circle', listStylePosition: 'inside' }}>
          <li><span className="headings">First Day of the Week:</span> {formatDay(firstOfWeek)}</li>
          {myWeekend.map((myDate, ind) => (
            <li key={ind}><span className="headings">Weekend Day {ind + 1}:</span> {formatDay(myDate)}</li>
          ))}
          <li><span className="headings">minimalDays:</span> {minimalDays}</li>
        </ul>
      </details>
    </div>
  );
}
