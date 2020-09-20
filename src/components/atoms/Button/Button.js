import React from "react";
import * as S from "./Button.styled";
import Button from "@material-ui/core/Button";

const ButtonWrapper = ({ onClick, variant, title, color }) => {
  return (
    <S.ButtonStyles className="button-container">
      <Button variant={variant} onClick={onClick} color={color}>
        {title}
      </Button>
    </S.ButtonStyles>
  );
};

export default ButtonWrapper;
