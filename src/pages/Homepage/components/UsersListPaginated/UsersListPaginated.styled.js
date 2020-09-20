import styled from "styled-components";

export const UsersListPaginatedStyle = styled.div`
  h2 {
  }
  .user-row-container {
    margin-bottom: 15px;
  }
  .loader-container {
    text-align: center;
  }
  .user-list-paginated {
    .total {
      margin: 0 0 8px;
      span {
        font-weight: bold;
      }
    }
    .filters {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: 15px;
    }
  }
`;
