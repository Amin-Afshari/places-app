import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Amin",
      image:
        "https://www.toureiffel.paris/sites/default/files/inline-images/Structure_0.jpg",
      places: 2,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
