import React, { useCallback, useState } from "react";
import Chart from "./c-cpns/chart";
import Controllers from "./c-cpns/controllers";
import { generateNumList } from "./../../utils";
function ChartShowByControllers() {
  const [count, setCount] = useState(5);
  const [range, setRange] = useState(50);
  const [chartData, setChartData] = useState(() => {
    return generateNumList(count, range);
  });

  const submitChangeAction = useCallback(() => {
    // 计算图表的数据
    const result = generateNumList(count, range);
    setChartData(result);
  }, [count, range]);
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
