import { memo, useEffect, useState } from "react";
import { ChartDiv, LineDiv } from "./style";
import { v4 as uuidv4 } from "uuid";
// 图表
interface ChartProps {
  data: number[];
  height?: number;
  color?: string;
}
const Chart = memo((props: ChartProps) => {
  const [data, setData] = useState<number[]>([]);
  useEffect(() => {
    console.log(props.data);
    setData(props.data);
  }, [props]);

  return (
    <ChartDiv wrapper={{ height: props.height ?? 200 }}>
      <div className="top">
        {data.map((item, index) => (
          <LineDiv
            height={item}
            color={props.color ?? "#8895b5"}
            key={uuidv4()}
          >
            <div className="num">{item}</div>
            <div className="line"></div>
            <div className="index"> {index + 1}</div>
          </LineDiv>
        ))}
      </div>
    </ChartDiv>
  );
});

export default Chart;
