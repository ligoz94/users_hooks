import React, { useEffect, useState, useContext } from "react";
import { useFetch } from "../../../../hooks";
import * as S from "./UsersList.styled";
import { UserRow, Loader, Select } from "../../../../components";
import HomepageContextWrapper from "../../HomepageContext";

// User list with 50 result
const UsersList = () => {
  // Context
  const { HomepageContext } = HomepageContextWrapper;
  // Homepage context
  const homepageContext = useContext(HomepageContext);
  // Take reducer and dispatch of the homepage context
  const { homepageState, dispatch } = homepageContext;

  // State
  const [gender, setGender] = useState("");
  const [changeGender, setChangeGender] = useState(false);
  const [allUserData, setAllUserData] = useState(homepageState.usersFull);

  let url = gender
    ? `${process.env.REACT_APP_API_URL}?results=50&gender=${gender}`
    : `${process.env.REACT_APP_API_URL}?results=50`;

  // Call api
  const { loading, data } = useFetch({
    url: url,
    shouldExecute: !allUserData.length || changeGender,
  });

  // Function that return user row component
  const renderUserRows = () => {
    return (
      allUserData &&
      allUserData.map((e, index) => (
        <UserRow
          key={index}
          className="full"
          firstname={e.name.first}
          lastname={e.name.last}
          avatar={e.picture.thumbnail}
        />
      ))
    );
  };

  // Set data
  useEffect(() => {
    if (data && data.results && allUserData.length <= 0) {
      dispatch({
        type: "add_users_full",
        payload: data.results,
      });
      setAllUserData(data.results);
    }
  }, [data]);

  const onChangeGender = (gender) => {
    setAllUserData([]);
    setChangeGender(true);
    setGender(gender);
  };

  return (
    <S.UsersListStyle>
      {loading ? (
        <Loader />
      ) : (
        <div className="user-list-full">
          <h2>User list</h2>
          <div className="filters">
            <p className="total">
              Total: <span>{allUserData.length}</span>
            </p>
            <Select
              value={gender}
              title="Genere"
              onChange={onChangeGender}
              name="gender"
              options={[
                { label: "", value: null },
                { label: "Femmina", value: "female" },
                { label: "Maschio", value: "male" },
              ]}
            />
          </div>
          {/* User rows */}
          {renderUserRows()}
        </div>
      )}
    </S.UsersListStyle>
  );
};

export default UsersList;
