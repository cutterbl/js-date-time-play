import { Temporal, toTemporalInstant } from '@js-temporal/polyfill';
Date.prototype.toTemporalInstant = toTemporalInstant;

const {
  calendar: defaultCalendar,
  locale: defaultLocale,
  timeZone: defaultTimeZone,
} = new Intl.DateTimeFormat().resolvedOptions();

const zonedFormatter = new Intl.DateTimeFormat('en-US', {
  timeStyle: 'short',
  timeZone: 'America/Los_Angeles',
});

export function Step2() {
  return (
    <div>
      <h1>Four O'Clock This Afternoon?</h1>
      <p style={{ marginTop: '1rem' }}>
        When dealing with times, why does your time seem to be ahead or behind
        what you intended?
      </p>
      <ul style={{ listStyle: 'circle', listStylePosition: 'inside' }}>
        <li>
          A <code className="inline">Date</code> object is expected to be date
          and time
        </li>
        <li>
          <code className="inline">Date</code>s are always in the browser's
          local timezone
        </li>
        <li>
          Browser native <code className="inline">Date</code>s can not be cast
          to another timezone
        </li>
      </ul>
      <details style={{ marginTop: '.5rem' }}>
        <summary className="headings">
          new Date('2024-01-01T16:00').toLocaleString();
        </summary>
        <p style={{ paddingLeft: '1rem', paddingBottom: '.5rem' }}>
          {new Date('2024-01-01T16:00').toLocaleString()}
        </p>
      </details>
      <details>
        <summary className="headings">
          Temporal.PlainDateTime.from('2024-01-01T16:00').toLocaleString();
        </summary>
        <p style={{ paddingLeft: '1rem', paddingBottom: '.5rem' }}>
          {Temporal.PlainDateTime.from('2024-01-01T16:00').toString()}
        </p>
      </details>
      <details>
        <summary className="headings">
          Temporal.PlainTime.from('2024-01-01T16:00').toLocaleString();
        </summary>
        <p style={{ paddingLeft: '1rem', paddingBottom: '.5rem' }}>
          {Temporal.PlainTime.from('2024-01-01T16:00').toLocaleString()}
        </p>
      </details>
      <details>
        <summary className="headings">But the time was in Los Angeles</summary>
        <pre className="code" style={{ marginLeft: '1rem' }}>
          const zonedFormatter = new Intl.DateTimeFormat("en-US", &#123;
          timeStyle: "short", timeZone: 'America/Los_Angeles' &#125;);
          console.log(zonedFormatter.format( new Date( Temporal.PlainDateTime
          .from("2024-01-01T16:00") .toZonedDateTime(defaultTimeZone)
          .toInstant() .toString() ) ));
        </pre>
        <p style={{ paddingLeft: '1rem', paddingBottom: '.5rem' }}>
          {zonedFormatter.format(
            new Date(
              Temporal.PlainDateTime.from('2024-01-01T16:00')
                .toZonedDateTime(defaultTimeZone)
                .toInstant()
                .toString()
            )
          )}
        </p>
        <p style={{ paddingLeft: '1rem', paddingBottom: '.5rem' }}>
          <span className="headings">Do not do this this way.</span> We'll talk
          about dealing with a true moment in time in a moment.
        </p>
      </details>
    </div>
  );
}
