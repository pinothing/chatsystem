export type FriendRequest = {
  createdAt: Date;
  id: string;
  receiver: string | null;
  requestDate: Date | null;
  sender: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
