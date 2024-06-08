import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ChatRoomWhereInput = {
  capacity?: IntNullableFilter;
  id?: StringFilter;
  messages?: MessageListRelationFilter;
  name?: StringNullableFilter;
  roomId?: IntNullableFilter;
  user?: UserWhereUniqueInput;
};
