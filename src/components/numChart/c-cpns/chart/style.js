import styled from "styled-components";

export const ChartDiv = styled.div`
  height: ${(props) => props.wrapper.height + 200 + "px"};

  .top {
    height: 80%;
    border-bottom: 1px solid #cdcdcd;
    margin: 20px 20px 0;
    align-items: end;
    justify-content: space-around;
    display: flex;
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

  @keyframes mymove {
    0% {
      height: 0px;
    }
  }

  .num {
    width: 100%;
    text-align: center;
  }
  .line {
    width: 100%;
    background-color: ${(props) => props.color || "red"};
    height: ${(props) => props.height + "px"};
    animation: mymove 0.1s ease-out;
  }
`;
