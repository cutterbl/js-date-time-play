import { Fragment } from 'react';
import { defaultLocaleInfo } from '../utilities';
import { Add, Subtract, JulyFourth, Since } from './math';
import { dates } from '../data.json';

const now = new Date();

const { timeZone: defaultTimeZone } = defaultLocaleInfo;

const types = {
  add: Add,
  subtract: Subtract,
  julyfourth: JulyFourth,
  since: Since,
};

export function MathMap({ locale, title, type = 'add', withTimeZone = false }) {
  const Component = types[type];
  return (
    <Fragment>
      <details>
        <summary className="headings">{title}</summary>
        <h5>
          Format {type} in local in "{defaultTimeZone}" and "{locale.locale}" in
          "{locale.timeZone}"
        </h5>
        {[now.toJSON(), ...dates].map((date, ind) => (
          <details key={ind} style={{ paddingLeft: '1rem' }}>
            <summary>{date}</summary>
            <p style={{ paddingLeft: '1rem' }}>
              <Component
                locale={locale}
                withTimeZone={withTimeZone}
                date={date}
              />
            </p>
          </details>
        ))}
      </details>
    </Fragment>
  );
}
