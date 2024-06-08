import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  chatRoomId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
