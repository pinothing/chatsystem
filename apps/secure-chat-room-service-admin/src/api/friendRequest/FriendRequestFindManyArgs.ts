import { FriendRequestWhereInput } from "./FriendRequestWhereInput";
import { FriendRequestOrderByInput } from "./FriendRequestOrderByInput";

export type FriendRequestFindManyArgs = {
  where?: FriendRequestWhereInput;
  orderBy?: Array<FriendRequestOrderByInput>;
  skip?: number;
  take?: number;
};
