/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, FriendRequest as PrismaFriendRequest } from "@prisma/client";

export class FriendRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.FriendRequestCountArgs, "select">
  ): Promise<number> {
    return this.prisma.friendRequest.count(args);
  }

  async friendRequests<T extends Prisma.FriendRequestFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FriendRequestFindManyArgs>
  ): Promise<PrismaFriendRequest[]> {
    return this.prisma.friendRequest.findMany<Prisma.FriendRequestFindManyArgs>(
      args
    );
  }
  async friendRequest<T extends Prisma.FriendRequestFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.FriendRequestFindUniqueArgs>
  ): Promise<PrismaFriendRequest | null> {
    return this.prisma.friendRequest.findUnique(args);
  }
  async createFriendRequest<T extends Prisma.FriendRequestCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FriendRequestCreateArgs>
  ): Promise<PrismaFriendRequest> {
    return this.prisma.friendRequest.create<T>(args);
  }
  async updateFriendRequest<T extends Prisma.FriendRequestUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FriendRequestUpdateArgs>
  ): Promise<PrismaFriendRequest> {
    return this.prisma.friendRequest.update<T>(args);
  }
  async deleteFriendRequest<T extends Prisma.FriendRequestDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.FriendRequestDeleteArgs>
  ): Promise<PrismaFriendRequest> {
    return this.prisma.friendRequest.delete(args);
  }
}
