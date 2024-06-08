import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FriendRequestServiceBase } from "./base/friendRequest.service.base";

@Injectable()
export class FriendRequestService extends FriendRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
