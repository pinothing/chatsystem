import { SortOrder } from "../../util/SortOrder";

export type FriendRequestOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  receiver?: SortOrder;
  requestDate?: SortOrder;
  sender?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
