import React, { FC } from 'react';
import './ActiveSessions.css';
import { ActiveSessionTable } from './components/ActiveSessionTable';

interface Props {}

export const ActiveSessions: FC<Props> = () => {
  return (
    <div className="ActiveSession">
      <div className="ActiveSessionTop">
        <h2>Current Sessions</h2>
        <button className="Button" onClick={() => {}}>
          Setup Packet Capture
        </button>
      </div>
      <ActiveSessionTable />
    </div>
  );
};
