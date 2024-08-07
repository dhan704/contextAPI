import React from "react";
import { UserConsumer } from "./UserContext";

function ComponentF() {
  return (
    <div>
      <UserConsumer>
        {
            (userName)=>{
                return <div>Hello {userName}</div>
            }
        }
      </UserConsumer>
    </div>
  );
}

export default ComponentF;
