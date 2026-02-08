import { createRoot } from 'react-dom/client';
import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
} from 'react-router-dom';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

import { App } from './App';
import PeoplePage from './pages/PeoplePage';
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage';
import { AppPath } from './types/paths';

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path={AppPath.Home} element={<Navigate to="/" replace />} />
        <Route path={AppPath.People} element={<PeoplePage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </Router>,
);
