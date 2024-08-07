import React from "react";

const UserContext = React.createContext();   //use Caps for creating const*******

const UserProvider = UserContext.Provider;   //use Caps for creating const*******
const UserConsumer = UserContext.Consumer;   //use Caps for creating const*******

export { UserProvider, UserConsumer };
