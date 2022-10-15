//modal that pops up when user clicks on a button
import React from "react";
import { Modal, Button } from "antd";

const Modals = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Successfully sent request!</p>
        <p>Thank you for reaching out. I will get back to you shortly.</p>
      </Modal>
    </>
  );
};

export default Modals;
