import { Button, Form, Input, Modal } from "antd";
import FormItem from "antd/lib/form/FormItem";
import TextArea from "antd/lib/input/TextArea";
import { forwardRef, useImperativeHandle, useState } from "react";

const PostModal = (props, ref) => {
  const [visible, setVisible] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      open() {
        setVisible(true);
      },
    };
  });

  const handleOk = (e) => {
    setVisible(false);
  };

  const handleCancel = (e) => {
    setVisible(false);
  };

  return (
    <Modal
      title="Add Post"
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      transitionName="fade-in-ease"
    >
      <Form>
        <FormItem>
          <Input name="title" placeholder="Title" />
        </FormItem>
        <FormItem>
          <TextArea name="body" placeholder="Body" rows={10} />
        </FormItem>
        <Button type="primary" htmlType="submit">
          Add
        </Button>
      </Form>
    </Modal>
  );
};

export default forwardRef(PostModal);
