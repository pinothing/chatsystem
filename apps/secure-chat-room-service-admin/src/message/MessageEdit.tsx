import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { ChatRoomTitle } from "../chatRoom/ChatRoomTitle";
import { UserTitle } from "../user/UserTitle";

export const MessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="chatRoom.id"
          reference="ChatRoom"
          label="ChatRoom"
        >
          <SelectInput optionText={ChatRoomTitle} />
        </ReferenceInput>
        <TextInput label="content" multiline source="content" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
