import { MessageCreateNestedManyWithoutChatRoomsInput } from "./MessageCreateNestedManyWithoutChatRoomsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ChatRoomCreateInput = {
  capacity?: number | null;
  messages?: MessageCreateNestedManyWithoutChatRoomsInput;
  name?: string | null;
  roomId?: number | null;
  user?: UserWhereUniqueInput | null;
};
