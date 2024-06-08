import { FriendRequest as TFriendRequest } from "../api/friendRequest/FriendRequest";

export const FRIENDREQUEST_TITLE_FIELD = "receiver";

export const FriendRequestTitle = (record: TFriendRequest): string => {
  return record.receiver?.toString() || String(record.id);
};
