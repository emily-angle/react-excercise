import React, { useEffect, useState } from "react";
import { ChartDiv, LineDiv } from "./style";

function Chart(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log(props.data);
    setData(props.data);
  }, [props]);

  return (
    <ChartDiv wrapper={{ height: 200 }}>
      <div className="top">
        {data.map((item, index) => (
          <LineDiv className="item" height={item} key={index} color="#8895b5">
            <div className="num">{item}</div>
            <div className="line"></div>
          </LineDiv>
        ))}
      </div>
      <div className="bottom">
        {data.map((item, index) => (
          <LineDiv className="item" height={item} key={index}>
            <div className="num">{index + 1}</div>
          </LineDiv>
        ))}
      </div>
    </ChartDiv>
  );
}

export default Chart;
