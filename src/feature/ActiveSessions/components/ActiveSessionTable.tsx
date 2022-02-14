import React, { FC, useState, useEffect } from 'react';
import './ActiveSessionTable.css';
import {
  ACTIVE_SESSION_DATA,
  activeSessionTableHeader,
} from '../../../utils/data';
import { ActiveSessionTR } from './ActiveSessionTR';
import { ISession } from '../../../utils/types';
interface Props {}
export const ActiveSessionTable: FC<Props> = () => {
  const [activeSessions, setActiveSessions] = useState<ISession[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setActiveSessions(ACTIVE_SESSION_DATA);
      });
  }, []);
  return (
    <div className="TableWrapper">
      <table className="Table">
        <thead>
          <tr className="TR">
            {activeSessionTableHeader.map((thead) => {
              return (
                <th className="TH" key={thead}>
                  {thead}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {activeSessions.map((sessionData) => {
            return (
              <tr key={sessionData.sessionId} className="TR">
                <ActiveSessionTR sessionData={sessionData} />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
