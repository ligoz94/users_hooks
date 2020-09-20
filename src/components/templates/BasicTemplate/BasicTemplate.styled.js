import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
`;
export const Children = styled.div`
  max-height: calc(100% - 130px);
  height: 100%;
  overflow-y: scroll;
`;
export const Header = styled.header`
  height: 80px;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.16);
`;
export const Footer = styled.footer`
  height: 50px;
  background: blue;
`;
