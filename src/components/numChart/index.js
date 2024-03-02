import React, { useState } from "react";
import Chart from "./c-cpns/chart";
import Controllers from "./c-cpns/controllers";
import { generateNumList } from "./../../utils";
function ChartShowByControllers() {
  const [count, setCount] = useState(0);
  const [range, setRange] = useState(0);
  const [chartData, setChartData] = useState([]);

  const submitChangeAction = () => {
    console.log(range, count);

    // 计算图表的数据
    const result = generateNumList(count, range);
    setChartData(result);
  };
  return (
    <div style={{ width: "500px", margin: "0 auto" }}>
      <Chart data={chartData} />
      <Controllers
        submitChangeAction={submitChangeAction}
        count={count}
        range={range}
        changeCount={(value) => setCount(value)}
        changeRange={(value) => setRange(value)}
      />
    </div>
  );
}

export default ChartShowByControllers;
