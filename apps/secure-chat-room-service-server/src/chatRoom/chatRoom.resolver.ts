import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ChatRoomResolverBase } from "./base/chatRoom.resolver.base";
import { ChatRoom } from "./base/ChatRoom";
import { ChatRoomService } from "./chatRoom.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ChatRoom)
export class ChatRoomResolver extends ChatRoomResolverBase {
  constructor(
    protected readonly service: ChatRoomService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
