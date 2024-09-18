import React, { useState } from "react";
import { VscKebabVertical } from "react-icons/vsc";

const TableIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="campaignMenuSec">
      <span onClick={() => setIsOpen(!isOpen)}>
        <VscKebabVertical />
      </span>
      {isOpen ? (
        <div className="campaignOption" onClick={() => setIsOpen(false)}>
          <div>Edit</div>
          <div onClick={() => Nav("/fundraising-page")}>View</div>
        </div>
      ) : null}
    </div>
  );
};

export default TableIcon;
