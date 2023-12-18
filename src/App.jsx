import React from "react";
import UserList from "./component/UserList";

const App = () => {
  return (
    <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-5">
      <UserList />
    </div>
  );
};

export default App;
