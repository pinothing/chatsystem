import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FriendRequestModuleBase } from "./base/friendRequest.module.base";
import { FriendRequestService } from "./friendRequest.service";
import { FriendRequestController } from "./friendRequest.controller";
import { FriendRequestResolver } from "./friendRequest.resolver";

@Module({
  imports: [FriendRequestModuleBase, forwardRef(() => AuthModule)],
  controllers: [FriendRequestController],
  providers: [FriendRequestService, FriendRequestResolver],
  exports: [FriendRequestService],
})
export class FriendRequestModule {}
