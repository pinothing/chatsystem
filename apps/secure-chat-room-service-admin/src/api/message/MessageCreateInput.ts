import { ChatRoomWhereUniqueInput } from "../chatRoom/ChatRoomWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MessageCreateInput = {
  chatRoom?: ChatRoomWhereUniqueInput | null;
  content?: string | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
