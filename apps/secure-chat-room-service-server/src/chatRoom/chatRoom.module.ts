import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ChatRoomModuleBase } from "./base/chatRoom.module.base";
import { ChatRoomService } from "./chatRoom.service";
import { ChatRoomController } from "./chatRoom.controller";
import { ChatRoomResolver } from "./chatRoom.resolver";

@Module({
  imports: [ChatRoomModuleBase, forwardRef(() => AuthModule)],
  controllers: [ChatRoomController],
  providers: [ChatRoomService, ChatRoomResolver],
  exports: [ChatRoomService],
})
export class ChatRoomModule {}
