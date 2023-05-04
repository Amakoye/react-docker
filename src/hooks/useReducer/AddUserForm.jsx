import { Button, Form, Input } from "antd";
import FormItem from "antd/lib/form/FormItem";
import { useState } from "react";

const AddUserForm = ({ handleAddUser }) => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddUser(user);
  };

  const onChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Form
      style={{
        width: 400,
      }}
      onSubmit={handleSubmit}
    >
      <FormItem>
        <Input
          name="firstname"
          value={user.firstname}
          onChange={onChange}
          placeholder="First name"
        />
      </FormItem>
      <FormItem>
        <Input
          name="lastname"
          onChange={onChange}
          value={user.lastname}
          placeholder="Last name"
        />
      </FormItem>
      <Button type="primary" htmlType="submit">
        Add
      </Button>
    </Form>
  );
};

export default AddUserForm;
