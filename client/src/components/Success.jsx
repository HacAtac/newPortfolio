import React from "react";
import { Result, Button } from "antd";

const Success = () => {
  const todayDate = new Date();
  //   const today = todayDate.toLocaleDateString();
  //   const time = todayDate.toLocaleTimeString();
  //   const dateTime = today + " " + time;

  return (
    <div className="success">
      <Result
        status="success"
        title="Request Sent Successfully!"
        subTitle="Thank you for reaching out. I will get back to you shortly."
        // extra={[
        //   <Button type="primary" key="console">
        //     Go Console
        //   </Button>,
        //   <Button key="buy">Buy Again</Button>,
        // ]}
      />
    </div>
  );
};

export default Success;
