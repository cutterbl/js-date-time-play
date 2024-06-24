export function Step3() {
  return (
    <div>
      <h1>ISO 8601 and RFC 3339</h1>
      <p style={{ marginTop: '1rem' }}>
        The Internet Date Time Format specifies the string format that defines
        an instance of time. Using this standard, you can define a date/time
        down to a specific point in time. However, a date/time without all parts
        will be considered 'local' time.
      </p>
      <details style={{ marginTop: '.5rem' }}>
        <summary className="headings">
          ✔️ <code className="inline">new Date('2024').toLocaleString()</code>
        </summary>
        <p style={{ paddingLeft: '1rem', paddingBottom: '.5rem' }}>
          {new Date('2024').toLocaleString()}
        </p>
      </details>
      <details style={{ marginTop: '.5rem' }}>
        <summary className="headings">
          ✔️ <code className="inline">new Date('2024-01').toLocaleString</code>
        </summary>
        <p style={{ paddingLeft: '1rem', paddingBottom: '.5rem' }}>
          {new Date('2024-01').toLocaleString()}
        </p>
      </details>
      <details style={{ marginTop: '.5rem' }}>
        <summary className="headings">
          ✔️{' '}
          <code className="inline">
            new Date('2024-01-01').toLocaleString()
          </code>
        </summary>
        <p style={{ paddingLeft: '1rem', paddingBottom: '.5rem' }}>
          {new Date('2024-01-01').toLocaleString()}
        </p>
      </details>
      <details style={{ marginTop: '.5rem' }}>
        <summary className="headings">
          ❌{' '}
          <code className="inline">
            new Date('2024-01-01T14').toLocaleString()
          </code>
        </summary>
        <p style={{ paddingLeft: '1rem', paddingBottom: '.5rem' }}>
          <strong>(needs minutes, even if '00')</strong>
          <br />
          {new Date('2024-01-01T14').toLocaleString()}
        </p>
      </details>
      <details style={{ marginTop: '.5rem' }}>
        <summary className="headings">
          ✔️{' '}
          <code className="inline">
            new Date('2024-01-01T14:35').toLocaleString()
          </code>
        </summary>
        <p style={{ paddingLeft: '1rem', paddingBottom: '.5rem' }}>
          {new Date('2024-01-01T14:35').toLocaleString()}
        </p>
      </details>
      <details style={{ marginTop: '.5rem' }}>
        <summary className="headings">
          ✔️{' '}
          <code className="inline">
            new Date('2024-01-01T14:35:45').toLocaleString()
          </code>
        </summary>
        <p style={{ paddingLeft: '1rem', paddingBottom: '.5rem' }}>
          {new Date('2024-01-01T14:35:45').toLocaleString()}
        </p>
      </details>
      <details style={{ marginTop: '.5rem' }}>
        <summary className="headings">
          ✔️{' '}
          <code className="inline">
            new Date('2024-01-01T14:35:45.689').toLocaleString()
          </code>
        </summary>
        <p style={{ paddingLeft: '1rem', paddingBottom: '.5rem' }}>
          {new Date('2024-01-01T14:35:45.689').toLocaleString()}
        </p>
      </details>
      <details style={{ marginTop: '.5rem' }}>
        <summary className="headings">
          ✔️{' '}
          <code className="inline">
            new Date('2024-01-01T14:35:45.689Z').toLocaleString()
          </code>
        </summary>
        <p style={{ paddingLeft: '1rem', paddingBottom: '.5rem' }}>
          <strong>This is a globally fully qualified instance of time</strong>
          <br />
          {new Date('2024-01-01T14:35:45.689Z').toLocaleString()}
        </p>
      </details>
      <details style={{ marginTop: '.5rem' }}>
        <summary className="headings">
          ✔️{' '}
          <code className="inline">
            new Date('2024-01-01T14:35:45.689-05:00').toLocaleString()
          </code>
        </summary>
        <p style={{ paddingLeft: '1rem', paddingBottom: '.5rem' }}>
          <strong>This is a globally fully qualified instance of time</strong>
          <br />
          {new Date('2024-01-01T14:35:45.689-05:00').toLocaleString()}
        </p>
      </details>
    </div>
  );
}
