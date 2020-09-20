import styled from "styled-components";
import { fontsize } from "../../../styles";

export const UserRowStyles = styled.div`
  padding: 10px;
  width: 100%;
  box-shadow: 0px 1px 7px -1px rgba(0, 25, 43, 0.47);
  .content {
    display: flex;
    align-items: center;
    .name {
      padding: 0 15px;
      font-size: ${fontsize.normal};
      font-weight: bold;
    }
  }
`;
