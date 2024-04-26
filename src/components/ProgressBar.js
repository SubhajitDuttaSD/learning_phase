import { useEffect, useState } from "react";

const ProgressBar = ({ progressValue = 0 }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(Math.min(100, Math.max(progressValue, 0)));
  }, [progressValue]);
  return (
    <div className="progress-bar-container">
      <div>ProgressBar</div>
      <div className="progress-bar">
        <span style={{ color: value < 49 ? "black" : "white" }}>
          {value.toFixed()}%
        </span>
        <div style={{ width: `${value.toFixed()}%` }} />
      </div>
    </div>
  );
};

export default ProgressBar;
