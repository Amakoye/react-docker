import Title from "antd/lib/typography/Title";
import { useReducer } from "react";
import AddUserForm from "./AddUserForm";
import UserListing from "./UserListing";

const Users = () => {
  const usersList = [
    {
      id: 1,
      firstname: "john",
      lastname: "doe",
    },
    {
      id: 2,
      firstname: "sarah",
      lastname: "smith",
    },
  ];

  /**
   * takes 2 args; current state value and an action{} - contains action type & additional data needed 2 perform an update
   * @param {*} users
   * @param {*} action
   */
  const reducerFunc = (users, action) => {
    switch (action.type) {
      case "addUser": {
        return [...users, { id: Date.now(), ...action.payload.user }];
      }

      case "deleteUser": {
        return users.filter((user) => user.id !== action.payload.id);
      }

      default: {
        // default action if any action other than above is specified
        return [...users];
      }
    }
  };

  const [users, dispatch] = useReducer(reducerFunc, usersList); // takes in a reducer function and initial data

  const addNewUser = (user) => {
    dispatch({
      type: "addUser",
      payload: {
        user,
      },
    });
  };

  const deleteUser = (userId) => {
    dispatch({
      type: "deleteUser",
      payload: {
        id: userId,
      },
    });
  };

  return (
    <div style={{ border: "1px solid green", padding: "1em", margin: "1em" }}>
      <Title>useReducer example</Title>
      <AddUserForm handleAddUser={addNewUser} />
      <UserListing users={users} />
    </div>
  );
};

export default Users;
