import { ControllerDiv } from "./style";
// 控制器

interface ControllerProps {
  submitChangeAction: () => void;
  changeCount: (val: number) => void;
  changeRange: (val: number) => void;
  count: number;
  range: number;
}

const Controllers = (props: ControllerProps) => {
  // 提交数量，将count和range传给父组件
  const submitAction = () => {
    props.submitChangeAction();
  };
  return (
    <ControllerDiv>
      <div className="left">
        <label>Count</label>
        <input
          value={props.count}
          type="number"
          onChange={(e) =>
            props.changeCount(e.target.value as unknown as number)
          }
          min={0}
        />
      </div>
      <div className="center">
        <label>Range</label>
        <input
          type="number"
          value={props.range}
          min={0}
          onChange={(e) =>
            props.changeRange(e.target.value as unknown as number)
          }
        />
      </div>
      <div className="right">
        <button onClick={submitAction}>generate</button>
      </div>
    </ControllerDiv>
  );
};

export default Controllers;
