import React, { useState } from "react";
import * as S from "./Homepage.styled";
import { DefaultTemplate } from "../../components";
import UsersList from "./components/UsersList/UsersList";
import UsersListPaginated from "./components/UsersListPaginated/UsersListPaginated";
// Context
import HomepageContextWrapper from "./HomepageContext";

const Homepage = () => {
  // -- State --
  const [tabIndex, setTabIndex] = useState(null);
  const { HomepageProvider } = HomepageContextWrapper;

  // Check the selected tab and show the related component
  const renderSelectedComponents = () => {
    switch (tabIndex) {
      case 0:
        return <UsersList />;
      case 1:
        return <UsersListPaginated />;
      default:
        break;
    }
  };

  return (
    <HomepageProvider>
      <DefaultTemplate onChangeTab={setTabIndex}>
        <S.HomepageStyle>{renderSelectedComponents()}</S.HomepageStyle>
      </DefaultTemplate>
    </HomepageProvider>
  );
};

export default Homepage;
