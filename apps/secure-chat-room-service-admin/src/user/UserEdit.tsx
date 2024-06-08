import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  BooleanInput,
  PasswordInput,
} from "react-admin";

import { ChatRoomTitle } from "../chatRoom/ChatRoomTitle";
import { MessageTitle } from "../message/MessageTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="availCoins" source="availCoins" />
        <ReferenceArrayInput
          source="chatRooms"
          reference="ChatRoom"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ChatRoomTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="deviceId" source="deviceId" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <BooleanInput label="isPrime" source="isPrime" />
        <TextInput label="Last Name" source="lastName" />
        <ReferenceArrayInput
          source="messages"
          reference="Message"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MessageTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <PasswordInput label="Password" source="password" />
        <TextInput label="phone" source="phone" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <NumberInput step={1} label="userId" source="userId" />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
