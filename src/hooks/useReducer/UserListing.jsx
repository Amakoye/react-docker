import { List } from "antd";

const UserListing = ({ users }) => {
  return (
    <>
      <List
        style={{ margin: "2em" }}
        size="small"
        header={<div>List of Users</div>}
        bordered
        dataSource={users}
        renderItem={({ firstname, lastname, id }) => (
          <List.Item>{`${firstname} ${lastname}`}</List.Item>
        )}
      />
    </>
    /*   <ul>
      {users.map((user) => (
        <li key={user.id}>{`${user.firstname} ${user.lastname}`}</li>
      ))}
    </ul> */
  );
};

export default UserListing;
