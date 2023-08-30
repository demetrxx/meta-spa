import { JsonSettings } from './jsonSettings';

export interface User {
  id: string;
  username: string;
  avatar?: string;
  jsonSettings?: JsonSettings;
}

export interface UserSchema {
  authData?: User;
  _initialized: boolean;
}
