import { ChatRoomUpdateManyWithoutUsersInput } from "./ChatRoomUpdateManyWithoutUsersInput";
import { MessageUpdateManyWithoutUsersInput } from "./MessageUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  availCoins?: number | null;
  chatRooms?: ChatRoomUpdateManyWithoutUsersInput;
  deviceId?: number | null;
  email?: string | null;
  firstName?: string | null;
  isPrime?: boolean | null;
  lastName?: string | null;
  messages?: MessageUpdateManyWithoutUsersInput;
  name?: string | null;
  password?: string;
  phone?: string | null;
  roles?: InputJsonValue;
  userId?: number | null;
  username?: string;
};
