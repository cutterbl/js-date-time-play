import { useState } from 'react';
import { defaultLocaleInfo } from '../utilities';
import { LocaleSelect } from '../components/LocaleSelect';
import { DateMap } from '../components/DateMap';
import { locales } from '../data.json';

const {
  calendar: defaultCalendar,
  locale: defaultLocale,
  timeZone: defaultTimeZone,
} = defaultLocaleInfo;

export function Step4() {
  const [locale, setLocale] = useState(() => locales[0]);
  const [withTimeZone, setWithTimeZone] = useState(false);

  return (
    <div>
      <h1>Formatting Dates and Times</h1>
      <p style={{ marginTop: '1rem' }}>
        Two things you have to realize when formatting dates and times:
      </p>
      <ul style={{ listStyle: 'circle', listStylePosition: 'inside' }}>
        <li>You should really have a fully qualified instance</li>
        <li>You should have a timezone</li>
      </ul>
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
      <DateMap title="Dates" locale={locale} />
      <DateMap
        title="Times"
        locale={locale}
        type="times"
        withTimeZone={withTimeZone}
      />
      <DateMap
        title="Dates and Times"
        locale={locale}
        type="datetimes"
        withTimeZone={withTimeZone}
      />
    </div>
  );
}
