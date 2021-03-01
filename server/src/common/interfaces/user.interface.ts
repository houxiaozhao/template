import { Types } from 'mongoose';

export class UserType {
  userid: string | Types.ObjectId;
  username: string;
  company: string | Types.ObjectId;
}
export class AdminType {
  userid: string | Types.ObjectId;
  username: string;
}
