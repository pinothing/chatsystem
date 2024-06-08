import { ChatRoom } from "../chatRoom/ChatRoom";
import { Message } from "../message/Message";
import { JsonValue } from "type-fest";

export type User = {
  availCoins: number | null;
  chatRooms?: Array<ChatRoom>;
  createdAt: Date;
  deviceId: number | null;
  email: string | null;
  firstName: string | null;
  id: string;
  isPrime: boolean | null;
  lastName: string | null;
  messages?: Array<Message>;
  name: string | null;
  phone: string | null;
  roles: JsonValue;
  updatedAt: Date;
  userId: number | null;
  username: string;
};
