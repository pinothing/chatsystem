import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type FriendRequestWhereInput = {
  id?: StringFilter;
  receiver?: StringNullableFilter;
  requestDate?: DateTimeNullableFilter;
  sender?: StringNullableFilter;
  status?: "Option1";
};
