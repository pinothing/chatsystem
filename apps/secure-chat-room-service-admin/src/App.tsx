import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { FriendRequestList } from "./friendRequest/FriendRequestList";
import { FriendRequestCreate } from "./friendRequest/FriendRequestCreate";
import { FriendRequestEdit } from "./friendRequest/FriendRequestEdit";
import { FriendRequestShow } from "./friendRequest/FriendRequestShow";
import { MessageList } from "./message/MessageList";
import { MessageCreate } from "./message/MessageCreate";
import { MessageEdit } from "./message/MessageEdit";
import { MessageShow } from "./message/MessageShow";
import { ChatRoomList } from "./chatRoom/ChatRoomList";
import { ChatRoomCreate } from "./chatRoom/ChatRoomCreate";
import { ChatRoomEdit } from "./chatRoom/ChatRoomEdit";
import { ChatRoomShow } from "./chatRoom/ChatRoomShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"SecureChatRoomService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="FriendRequest"
          list={FriendRequestList}
          edit={FriendRequestEdit}
          create={FriendRequestCreate}
          show={FriendRequestShow}
        />
        <Resource
          name="Message"
          list={MessageList}
          edit={MessageEdit}
          create={MessageCreate}
          show={MessageShow}
        />
        <Resource
          name="ChatRoom"
          list={ChatRoomList}
          edit={ChatRoomEdit}
          create={ChatRoomCreate}
          show={ChatRoomShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
