import React, { useState } from "react";
import "./DelectModal.css";

const DelectModal = ({ setDelectModal }) => {
  const [show, setShow] = useState(false);
  const [delectConfirm, setDeleteConfirm] = useState("");
  console.log(delectConfirm);

  const delect = () => {
    if (delectConfirm == "DELETE") {
      setShow(false);
      alert("This account will be deleted");
    } else {
      setShow(true);
    }

    // return setShow
  };
  return (
    <div className="deleteModalBody">
      <div className="deleteModalWrapper">
        <div className="deleteModLHead">
          <div>Delete Account</div>
          <span
            className="deleteCancleBtn"
            onClick={() => setDelectModal(false)}
          >
            X
          </span>
        </div>
        <div>
          Are you want to delete the account linked to your example@gmail.com.
          You will not be able to undo.
        </div>
        <div className="deleteTextCopy">To confirm this, type "<span>DELETE</span>"</div>
        <div className="deleteInputBox">
          <input
            type="text"
            onChange={(e) => setDeleteConfirm(e.target.value)}
          />
          <button onClick={delect}>DELETE</button>
        </div>
        {show ? (
          <div className="delectErrMessage">
            Text must match what is specified
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default DelectModal;
