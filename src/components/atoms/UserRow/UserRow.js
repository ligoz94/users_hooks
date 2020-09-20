import React from "react";
import * as S from "./UserRow.style";
import Avatar from "@material-ui/core/Avatar";

const UserRow = ({ avatar, firstname, lastname }) => {
  return (
    <S.UserRowStyles className="user-row-container">
      <div className="content">
        <Avatar alt="Remy Sharp" src={avatar} />
        <div className="name">{`${firstname} ${lastname}`}</div>
      </div>
    </S.UserRowStyles>
  );
};

export default React.memo(UserRow);
