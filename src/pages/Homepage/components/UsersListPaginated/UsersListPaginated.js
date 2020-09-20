import React, { useEffect, useState, useContext } from "react";
import { useFetch } from "../../../../hooks";
import * as S from "./UsersListPaginated.styled";
import { UserRow, Button, Loader, Select } from "../../../../components";

import HomepageContextWrapper from "../../HomepageContext";

// User list paginated which is incremented by 10 by 10
const UsersListPaginated = () => {
  // -- Context --
  const { HomepageContext } = HomepageContextWrapper;
  // Homepage context
  const homepageContext = useContext(HomepageContext);
  // Take reducer and dispatch of the homepage context
  const { homepageState, dispatch } = homepageContext;

  // -- State --
  const [page, setPage] = useState(1);
  const [gender, setGender] = useState("");
  const [loadMore, setLoadMore] = useState(false);
  const [changeGender, setChangeGender] = useState(false);
  const [error, setError] = useState(false);

  const pageSize = 10;
  const maxItems = 50;
  const allUserDataPaginated = homepageState.usersPaginated;

  let url = gender
    ? `${process.env.REACT_APP_API_URL}?page=${page}&results=${pageSize}&gender=${gender}`
    : `${process.env.REACT_APP_API_URL}?page=${page}&results=${pageSize}`;

  // Get users
  const { loading, data, hasError } = useFetch({
    url: url,
    shouldExecute:
      (!error &&
        allUserDataPaginated.length <= maxItems &&
        (loadMore || changeGender)) ||
      allUserDataPaginated.length <= 0,
  });

  // Set new page, load more and cancel error
  const onLoadMore = () => {
    setError(false);
    setLoadMore(true);

    setPage(page + 1);
  };

  // Function that return show more component
  const renderShowMore = () => {
    return (
      <div className="showmore-wrapper">
        {loading ? (
          <Loader />
        ) : (
          allUserDataPaginated &&
          allUserDataPaginated.length < maxItems && (
            <Button
              title="Carica altro"
              variant="outlined"
              color="primary"
              onClick={() => onLoadMore()}
            />
          )
        )}
      </div>
    );
  };

  // Function that return user row component
  const renderUserRows = () => {
    return (
      allUserDataPaginated &&
      allUserDataPaginated.map((e, index) => (
        <UserRow
          key={index}
          className="paginated"
          firstname={e.name.first}
          lastname={e.name.last}
          avatar={e.picture.thumbnail}
        />
      ))
    );
  };

  // Populate users data
  useEffect(() => {
    if (data && data.results && !hasError) {
      dispatch({
        type: "add_users_paginated",
        payload: data.results,
      });
      setError(false);
      setLoadMore(false);
      setChangeGender(false);
    }
    /* 
      if api return error set page to the last page called because in the loadmore function
      i always increase the page by one
     */
    if (hasError) {
      setError(true);
      if (page > 1) {
        setPage(page - 1);
      } else {
        setPage(0);
      }
    }
  }, [data, hasError]);

  // When I change gender i reset the status as the initial one
  const onChangeGender = (gender) => {
    dispatch({
      type: "change_gender_paginated",
      payload: [],
    });
    setPage(1);
    setChangeGender(true);
    setGender(gender);
  };

  return (
    <S.UsersListPaginatedStyle>
      {loading && !allUserDataPaginated.length ? (
        <Loader />
      ) : (
        <div className="user-list-paginated">
          <h2>User list paginated</h2>
          <div className="filters">
            <p className="total">
              Total: <span>{allUserDataPaginated.length}</span>
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
          {/* Show more */}
          {renderShowMore()}
        </div>
      )}
    </S.UsersListPaginatedStyle>
  );
};

export default UsersListPaginated;
