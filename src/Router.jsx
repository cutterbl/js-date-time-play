import { Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Step1, Step2, Step3, Step4, Step5, Step6 } from './views';
import { Layout } from './Layout';

import './Router.scss';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="step1" element={<Step1 />} />
        <Route path="step2" element={<Step2 />} />
        <Route path="step3" element={<Step3 />} />
        <Route path="step4" element={<Step4 />} />
        <Route path="step5" element={<Step5 />} />
        <Route path="step6" element={<Step6 />} />
      </Route>
    </Routes>
  );
}
