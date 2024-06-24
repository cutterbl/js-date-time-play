import { useState } from 'react';
import { defaultLocaleInfo } from '../utilities';
import { LocaleSelect } from '../components/LocaleSelect';
import { MathMap } from '../components/MathMap';
import { locales } from '../data.json';

const {
  calendar: defaultCalendar,
  locale: defaultLocale,
  timeZone: defaultTimeZone,
} = defaultLocaleInfo;

export function Step5() {
  const [locale, setLocale] = useState(() => locales[0]);
  const [withTimeZone, setWithTimeZone] = useState(false);

  return (
    <div>
      <h1>Date Math Is Easy</h1>
      <p style={{ marginTop: '1rem' }}>
        In the past we had to rely on libraries like{' '}
        <code className="inline">moment</code>,{' '}
        <code className="inline">Luxon</code>, and{' '}
        <code className="inline">date-fns</code> to attempt math of dates and
        times. It was complicated, especially when using time zones as well.
        Coming soon we will have the{' '}
        <code className="inline">Temporal API</code>, and you can use it today
        using the polyfil provided by the TC39 working group.
      </p>
      <p style={{ marginTop: '1rem' }}>My local Locale defaults:</p>
      <ul style={{ listStyle: 'circle', listStylePosition: 'inside' }}>
        <li>
          <code className="inline">calendar</code> - {defaultCalendar}
        </li>
        <li>
          <code className="inline">locale</code> - {defaultLocale}
        </li>
        <li>
          <code className="inline">timeZone</code> - {defaultTimeZone}
        </li>
      </ul>
      <LocaleSelect
        locale={locale}
        setLocale={setLocale}
        withTimeZone={withTimeZone}
        setWithTimeZone={setWithTimeZone}
      />
      <MathMap title="Add a month" locale={locale} />
      <MathMap title="Subtract 22 days" locale={locale} type="subtract" />
      <MathMap
        title="X days until the next July 4th"
        locale={locale}
        type="julyfourth"
      />
      <MathMap
        title="X days since the first of the month"
        locale={locale}
        type="since"
      />
    </div>
  );
}
