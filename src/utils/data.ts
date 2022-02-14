import { IMirroSession, ISession } from './types';

export const ACTIVE_SESSION_DATA: ISession[] = [
  {
    sessionId: 'Session123',
    account: '21312312',
    vpc: 'vpc-1230',
    date: '2/3/2021',
    requestor: 'ss3',
    status: 'Active',
  },
  {
    sessionId: 'Session112313',
    account: '21312312',
    vpc: 'vpc-1230',
    date: '2/3/2021',
    requestor: 'ss3',
    status: 'Active',
  },
  {
    sessionId: 'Session1as21323',
    account: '21312312',
    vpc: 'vpc-1230',
    date: '2/3/2021',
    requestor: 'ss3',
    status: 'Active',
  },
];
export const activeSessionTableHeader: string[] = [
  'Session ID',
  'Account',
  'VPC',
  'Status',
  'Date',
  'Requestor',
  'Packet Download URL',
  'Modify',
  'Remove',
];
export const ActiveMirrorSession: IMirroSession = {
  account: 'AMAZON',
  vpc: 'VPC-123',
  captureSets: [
    { ec2Instance: '123.123.123', remoteIps: '123', requestor: 'me' },
    { ec2Instance: '123.123.asdasd123', remoteIps: 'asdasd', requestor: 'ou' },
    {
      ec2Instance: '123.123.asdasssd123',
      remoteIps: 'asdas123asd',
      requestor: 'oasdasdu',
    },
  ],
};
