import styled from "styled-components";

export const DefaultTemplateStyle = styled.div``;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
export const Footer = styled.footer`
  height: 50px;
  background: #00192b;
  .content-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    .footer-item {
      margin: 0 20px;
      color: white;
      cursor: pointer;
      text-decoration: none;
    }
  }
`;
