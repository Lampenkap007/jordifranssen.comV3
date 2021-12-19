import React from "react";
import { Scrollbars } from "react-custom-scrollbars";

const Stage = () => {
  return (
    <Scrollbars style={{ width: "100%", height: "100vh", autohide: true }}>
      <div className="page">
        <div className="container">
          <div className="row">
            <h3>This is the stage page</h3>
          </div>
        </div>
      </div>
    </Scrollbars>
  );
};

export default Stage;
