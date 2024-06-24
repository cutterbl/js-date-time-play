import { locales } from '../data.json';

export function LocaleSelect({
  locale,
  setLocale,
  withTimeZone,
  setWithTimeZone,
}) {
  const onChange = ({ target: { value } }) => {
    const newLocale = locales.find(({ locale: id }) => id === value);
    setLocale(newLocale);
  };

  const onWithTimeZoneChange = ({ target: { checked } }) =>
    setWithTimeZone(checked);

  return (
    <div style={{ padding: '1rem 0' }}>
      <label>Select A Locale</label>
      <br />
      <select name="locale" onChange={onChange} value={locale.code}>
        {locales.map(({ locale: code, name }, ind) => (
          <option key={ind} value={code}>
            {name}
          </option>
        ))}
      </select>{' '}
      <label style={{ marginLeft: '1rem' }}>
        <input
          type="checkbox"
          name="withTimeZone"
          checked={withTimeZone}
          onChange={onWithTimeZoneChange}
        />{' '}
        with Time Zone
      </label>
    </div>
  );
}
