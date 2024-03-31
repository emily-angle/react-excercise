import { useCallback, useState } from "react";
import Chart from "./c-cpns/chart";
import Controllers from "./c-cpns/controllers";
import { generateNumList } from "../../utils";
function ChartShowByControllers() {
  // 图表中的元素个数
  const [count, setCount] = useState<number>(5);
  // 值变化范围
  const [range, setRange] = useState<number>(50);
  // 图表数据集合
  const [chartData, setChartData] = useState<number[]>(() => {
    return generateNumList(count, range);
  });

  const submitChangeAction = useCallback(() => {
    // 重新计算图表的数据
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
