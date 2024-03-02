import styled from "styled-components";

export const ControllerDiv = styled.div`
  display: flex;
  align-item: center;

  .left,
  .center,
  .right {
    flex: 1;
  }
  input {
    width: 50px;
    margin-left: 5px;
  }
`;
