import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";

export type MessageUpdateManyWithoutChatRoomsInput = {
  connect?: Array<MessageWhereUniqueInput>;
  disconnect?: Array<MessageWhereUniqueInput>;
  set?: Array<MessageWhereUniqueInput>;
};
