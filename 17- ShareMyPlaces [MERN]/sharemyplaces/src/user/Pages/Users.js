import React from "react";
import UsersList from "../Components/UsersList";

function Users() {
  const USERS = [
    {
      id: 1,
      image:
        "https://yt3.ggpht.com/a/AGF-l7-Jmi4Q66EjYvjXLvleJbg8B29duQcyshDCtg=s100-c-k-c0xffffffff-no-rj-mo",
      name: "Mehrdad",
      places: "10"
    }
  ];
  return <UsersList items={USERS} />;
}

export default Users;
