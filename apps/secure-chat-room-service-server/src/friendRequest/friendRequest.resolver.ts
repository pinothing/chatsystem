import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FriendRequestResolverBase } from "./base/friendRequest.resolver.base";
import { FriendRequest } from "./base/FriendRequest";
import { FriendRequestService } from "./friendRequest.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FriendRequest)
export class FriendRequestResolver extends FriendRequestResolverBase {
  constructor(
    protected readonly service: FriendRequestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
