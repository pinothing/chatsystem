import { ChatRoomCreateNestedManyWithoutUsersInput } from "./ChatRoomCreateNestedManyWithoutUsersInput";
import { MessageCreateNestedManyWithoutUsersInput } from "./MessageCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  availCoins?: number | null;
  chatRooms?: ChatRoomCreateNestedManyWithoutUsersInput;
  deviceId?: number | null;
  email?: string | null;
  firstName?: string | null;
  isPrime?: boolean | null;
  lastName?: string | null;
  messages?: MessageCreateNestedManyWithoutUsersInput;
  name?: string | null;
  password: string;
  phone?: string | null;
  roles: InputJsonValue;
  userId?: number | null;
  username: string;
};
