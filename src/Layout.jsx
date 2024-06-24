import { Link, Outlet } from 'react-router-dom';

import styles from './Layout.module.scss';

export function Layout() {
  return (
    <div className={styles.container}>
      <nav>
        <ul>
          <li>
            <Link to="/">Working With Date and Time</Link>
          </li>
          <li>
            <Link to="/step1">When Is "2024-01-01"?</Link>
          </li>
          <li>
            <Link to="/step2">Four O'Clock This Afternoon?</Link>
          </li>
          <li>
            <Link to="/step3">ISO 8601 and RFC 3339</Link>
          </li>
          <li>
            <Link to="/step4">Formatting Dates and Times</Link>
          </li>
          <li>
            <Link to="/step5">Date Math Is Easy</Link>
          </li>
          <li>
            <Link to="/step6">When Is The First of the Week?</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
