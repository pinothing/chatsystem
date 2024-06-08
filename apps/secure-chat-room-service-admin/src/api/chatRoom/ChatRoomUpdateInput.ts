import { MessageUpdateManyWithoutChatRoomsInput } from "./MessageUpdateManyWithoutChatRoomsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ChatRoomUpdateInput = {
  capacity?: number | null;
  messages?: MessageUpdateManyWithoutChatRoomsInput;
  name?: string | null;
  roomId?: number | null;
  user?: UserWhereUniqueInput | null;
};
