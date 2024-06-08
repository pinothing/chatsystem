import { Message } from "../message/Message";
import { User } from "../user/User";

export type ChatRoom = {
  capacity: number | null;
  createdAt: Date;
  id: string;
  messages?: Array<Message>;
  name: string | null;
  roomId: number | null;
  updatedAt: Date;
  user?: User | null;
};
