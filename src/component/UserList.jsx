import React, { useEffect } from "react";
import axios from "axios";
import { Avatar, Card } from "antd";
const { Meta } = Card;

function UserList() {
  const [listOfUser, setListOfUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const getNews = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      setListOfUser(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getNews();
  }, []);

  if (loading) {
    return <div className="spinner"> </div>;
  }
  console.log(listOfUser);

  return (
    <>
      {listOfUser.map((item) => (
        <div key={item.id} className="shadow-md rounded-md bg-green-300 p-4">
          <h1>
            <strong>Name: </strong>
            {item.name}
          </h1>
          <p>
            <strong>Email: </strong>
            {item.email}
          </p>
          <p>
            {" "}
            <strong>Username: </strong>
            {item.username}
          </p>
          <div className="flex gap-3 ">
            <strong>Address: </strong>
            <p>{item.address.street}</p>
            <p>{item.address.city}</p>
            <p>{item.address.suite}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default UserList;
