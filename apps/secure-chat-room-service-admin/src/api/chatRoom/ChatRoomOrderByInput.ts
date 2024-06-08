import { SortOrder } from "../../util/SortOrder";

export type ChatRoomOrderByInput = {
  capacity?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  roomId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
