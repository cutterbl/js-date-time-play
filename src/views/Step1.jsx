import { Temporal, toTemporalInstant } from '@js-temporal/polyfill';
Date.prototype.toTemporalInstant = toTemporalInstant;

const koreanFormatter = new Intl.DateTimeFormat('ko-kr', {
  dateStyle: 'short',
});

export function Step1() {
  return (
    <div>
      <h1>When Is "2024-01-01"?</h1>
      <p style={{ marginTop: '1rem' }}>
        When dealing with dates, why does your date seem to be ahead or behind
        what you intended?
      </p>
      <ul style={{ listStyle: 'circle', listStylePosition: 'inside' }}>
        <li>
          A <code className="inline">Date</code> object is ultimately expected
          to be date and time
        </li>
        <li>
          A <code className="inline">Date</code> represents an exact moment in
          time in epoch milliseconds
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
          new Date('2024-01-01').toLocaleString();
        </summary>
        <p style={{ paddingLeft: '1rem', paddingBottom: '.5rem' }}>
          {new Date('2024-01-01').toLocaleString()}
        </p>
      </details>
      <details>
        <summary className="headings">
          Temporal.PlainDateTime.from('2024-01-01').toLocaleString();
        </summary>
        <p style={{ paddingLeft: '1rem', paddingBottom: '.5rem' }}>
          {Temporal.PlainDateTime.from('2024-01-01').toLocaleString()}
        </p>
      </details>
      <details>
        <summary className="headings">
          Temporal.PlainDate.from('2024-01-01').toLocaleString();
        </summary>
        <p style={{ paddingLeft: '1rem', paddingBottom: '.5rem' }}>
          {Temporal.PlainDate.from('2024-01-01').toLocaleString()}
        </p>
      </details>
      <details>
        <summary className="headings">In Korean;</summary>
        <div style={{ paddingLeft: '1rem', paddingBottom: '.5rem' }}>
          {koreanFormatter.format(
            new Date(Temporal.PlainDateTime.from('2024-01-01').toString())
          )}
        </div>
      </details>
    </div>
  );
}
