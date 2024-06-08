import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ChatRoomListRelationFilter } from "../chatRoom/ChatRoomListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";

export type UserWhereInput = {
  availCoins?: IntNullableFilter;
  chatRooms?: ChatRoomListRelationFilter;
  deviceId?: IntNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  isPrime?: BooleanNullableFilter;
  lastName?: StringNullableFilter;
  messages?: MessageListRelationFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
  userId?: IntNullableFilter;
  username?: StringFilter;
};
