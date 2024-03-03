import React, { memo, useEffect, useState } from "react";
import { ChartDiv, LineDiv } from "./style";
import { v4 as uuidv4 } from "uuid";
const Chart = memo((props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log(props.data);
    setData(props.data);
  }, [props]);

  return (
    <ChartDiv wrapper={{ height: 200 }}>
      <div className="top">
        {data.map((item) => (
          <LineDiv height={item} color="#8895b5" key={uuidv4()}>
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
});

export default Chart;
