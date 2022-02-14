export enum NavPath {
  ActiveSession = '/session/active',
  MirrorSessionView = '/session/mirror/view',
  MirrorSessionRemove = '/session/mirror/remove',
  MirrorSessionModify = '/session/mirror/modify',
  MirrorSessionClear = '/session/mirror/clear',
}

export interface ISession {
  sessionId: string;
  account: string;
  vpc: string;
  status: string;
  date: string;
  requestor: string;
}

export interface ISessionApiResponse {
  items: ISession[];
}

export interface IMirroSession {
  account: string;
  vpc: string;
  captureSets: ICaptureSet[];
}

export interface ICaptureSet {
  ec2Instance: string;
  remoteIps: string;
  requestor: string;
}
