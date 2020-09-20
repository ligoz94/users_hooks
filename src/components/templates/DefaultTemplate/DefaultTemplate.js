import React, { useEffect, useState } from "react";
import * as S from "./DefaultTemplate.styled";
import BasicTemplate from "../BasicTemplate/BasicTemplate";
import { ButtonGroup } from "../../molecules";

const DefaultTemplate = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    props.onChangeTab(selectedIndex);
  }, [selectedIndex]);

  // Custom Header
  const Header = () => {
    return (
      <S.Header>
        <ButtonGroup
          itemSelected={selectedIndex}
          items={[
            {
              id: 0,
              label: "Lista utenti 1",
              onClick: () => setSelectedIndex(0),
            },
            {
              id: 1,
              label: "Lista utenti 2",
              onClick: () => setSelectedIndex(1),
            },
          ]}
        />
      </S.Header>
    );
  };

  // Custom footer
  const Footer = () => {
    return (
      <S.Footer>
        <div className="content-footer">
          <a className="footer-item" href="#">
            Link 1
          </a>
          <a className="footer-item" href="#">
            Link 2
          </a>
          <a className="footer-item" href="#">
            Link 3
          </a>
        </div>
      </S.Footer>
    );
  };

  return (
    <S.DefaultTemplateStyle>
      <BasicTemplate header={<Header />} footer={<Footer />}>
        {props.children}
      </BasicTemplate>
    </S.DefaultTemplateStyle>
  );
};

export default DefaultTemplate;
