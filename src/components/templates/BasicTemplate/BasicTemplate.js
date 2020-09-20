import React from "react";
import * as S from "./BasicTemplate.styled";

// This template is the basic skeleton to use to build other templates
const BasicTemplate = ({ header, footer, children }) => {
  return (
    <S.Container>
      <S.Header>{header}</S.Header>
      <S.Children>{children}</S.Children>
      <S.Footer>{footer}</S.Footer>
    </S.Container>
  );
};

export default BasicTemplate;
