import { Button, List } from "antd";
import Text from "antd/lib/typography/Text";

const UserListing = ({ users, onDelete }) => {
  return (
    <>
      <List
        style={{ margin: "2em" }}
        size="small"
        header={<div>List of Users</div>}
        bordered
        dataSource={users}
        renderItem={({ firstname, lastname, id }) => (
          <List.Item>
            <Text>{`${firstname} ${lastname}`}</Text>
            <Button
              type="danger"
              htmlType="button"
              onClick={() => onDelete(id)}
            >
              Delete
            </Button>
          </List.Item>
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
