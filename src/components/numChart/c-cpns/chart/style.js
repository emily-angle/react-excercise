import styled from "styled-components";

export const ChartDiv = styled.div`
  height: ${(props) => props.wrapper.height + 200 + "px"};

  .top {
    display: flex;
    height: 80%;
    justify-content: space-around;
    align-items: end;
    border-bottom: 1px solid #cdcdcd;
    margin: 20px 20px 0;
  }
  .bottom {
    display: flex;
    justify-content: space-around;
    height: 20%;
    margin: 0 20px;
  }
`;
export const LineDiv = styled.div`
  width: 40px;
  .num {
    width: 100%;
    text-align: center;
  }
  .line {
    width: 100%;
    background-color: ${(props) => props.color || "red"};
    height: ${(props) => props.height + "px"};
  }
`;
