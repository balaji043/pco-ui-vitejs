import React, { FC, Fragment } from 'react';
import { ISession, NavPath } from '../../../utils/types';
import { Link } from 'react-router-dom';
interface Props {
  sessionData: ISession;
}
export const ActiveSessionTR: FC<Props> = ({ sessionData }) => {
  return (
    <Fragment>
      <td className="TD">{sessionData.sessionId}</td>
      <td className="TD">{sessionData.account}</td>
      <td className="TD">{sessionData.vpc}</td>
      <td className="TD">{sessionData.status}</td>
      <td className="TD">{sessionData.date}</td>
      <td className="TD">{sessionData.requestor}</td>
      <td className="TD">
        <Link
          className="LinkButton"
          to={`${NavPath.MirrorSessionClear}/${sessionData.sessionId}`}
        >
          Clear URL
        </Link>
      </td>
      <td className="TD">
        <Link
          className="LinkButton"
          to={`${NavPath.MirrorSessionModify}/${sessionData.sessionId}`}
        >
          Modify
        </Link>
      </td>
      <td className="TD">
        <Link
          className="LinkButton"
          to={`${NavPath.MirrorSessionRemove}/${sessionData.sessionId}`}
        >
          Remove
        </Link>
      </td>
    </Fragment>
  );
};
