import React, { useState, FC, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import './App.css';
import { ActiveSessions } from './feature/ActiveSessions/ActiveSessions';
import { Login } from './feature/Login/Login';
import { ViewMirrorSessions } from './feature/ViewMirrorSessions/ViewMirrorSessions';
import { NavPath } from './utils/types';

export const App: FC = () => {
  const [isLoggedIn, setIsLogged] = useState<boolean>(true);

  return (
    <div className="App">
      <div className="Container">
        {isLoggedIn ? (
          <AppRouter setIsLogged={setIsLogged} />
        ) : (
          <Login setIsLogged={setIsLogged} />
        )}
      </div>
    </div>
  );
};

interface AppRouterProps {
  setIsLogged: (v: boolean) => void;
}
const AppRouter: FC<AppRouterProps> = ({ setIsLogged }) => {
  return (
    <Fragment>
      <div className="NavBar">
        <h1>PCO-UI</h1>
        <button
          className="Button"
          onClick={() => {
            setIsLogged(false);
          }}
        >
          SignOut
        </button>
      </div>
      <Router>
        <Routes>
          <Route path={'/'} element={<Navigate to={NavPath.ActiveSession} />} />
          <Route path={NavPath.ActiveSession} element={<ActiveSessions />} />
          <Route
            path={`${NavPath.MirrorSessionView}/:id`}
            element={<ViewMirrorSessions />}
          />
          <Route
            path={`${NavPath.MirrorSessionRemove}/:id`}
            element={<ViewMirrorSessions />}
          />
          <Route
            path={`${NavPath.MirrorSessionModify}/:id`}
            element={<ViewMirrorSessions />}
          />
          <Route
            path={`${NavPath.MirrorSessionClear}/:id`}
            element={<ViewMirrorSessions />}
          />
        </Routes>
      </Router>
    </Fragment>
  );
};
