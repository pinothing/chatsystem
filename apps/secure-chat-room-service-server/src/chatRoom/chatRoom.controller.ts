import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ChatRoomService } from "./chatRoom.service";
import { ChatRoomControllerBase } from "./base/chatRoom.controller.base";

@swagger.ApiTags("chatRooms")
@common.Controller("chatRooms")
export class ChatRoomController extends ChatRoomControllerBase {
  constructor(
    protected readonly service: ChatRoomService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
