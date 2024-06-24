export function Home() {
  return (
    <div>
      <h1>Working With Date and Time</h1>
      <p style={{ marginTop: '1rem' }}>
        When developing calendars and date/time based applications the locale,
        calendar and timezone are critical points for properly handling dates
        and time. This not only effects internationalization, but date math as
        well.
      </p>
      <details style={{ marginTop: '.5rem' }}>
        <summary className="headings">
          What day is the beginning of a week?
        </summary>
        <p style={{ paddingLeft: '1rem', paddingBottom: '.5rem' }}>
          There are 7+ Billion people in the world. Half of them see Sunday as
          the beginning of their week, while the other half recognizes Monday as
          the beginning of their week.
        </p>
      </details>
      <details>
        <summary className="headings">Daylight Savings Time?</summary>
        <p style={{ paddingLeft: '1rem', paddingBottom: '.5rem' }}>
          There are more than 24 time zones in the world, and those that
          recognize DST change their date offset twice a year.
        </p>
      </details>
      <details>
        <summary className="headings">How should I format for X?</summary>
        <div style={{ paddingLeft: '1rem', paddingBottom: '.5rem' }}>
          Using the Gregorian calendar:
          <ul style={{ listStyle: 'circle', listStylePosition: 'inside' }}>
            <li>‘12/31/2024’ in the US</li>
            <li>‘31/12/2024’ in Great Britain</li>
            <li>‘2024. 12.31.’ in Korea</li>
            <li>‘٣١‏/١٢‏/٢٠٢٤’ in Arabic</li>
          </ul>
          Completely different in the Hebrew, Islamic or Assamese.
        </div>
      </details>
      <details>
        <summary className="headings">What is "1400"?</summary>
        <p style={{ paddingLeft: '1rem', paddingBottom: '.5rem' }}>
          Only 18 countries in the world use a 12 hour clock.
        </p>
      </details>
    </div>
  );
}
