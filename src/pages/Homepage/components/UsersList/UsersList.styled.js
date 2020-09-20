import styled from "styled-components";

export const UsersListStyle = styled.div`
  /* Override */
  .user-row-container {
    margin-bottom: 15px;
  }
  .loader-container {
    text-align: center;
  }
  .user-list-full {
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
