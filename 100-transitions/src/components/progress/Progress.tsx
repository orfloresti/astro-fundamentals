import React, { useCallback, useRef, useState } from "react";
import styles from "./progress.module.scss";

const Progress: React.FC<{}> = () => {

  const [progress, setProgress] = useState(0);
  const interval = useRef(0);

  const handlePlay = () => {
    interval.current = setInterval( ()=> setProgress(value => value + 1), 1000);
  };

  const handlePause = () => {
    clearInterval(interval.current);
  }

  const handleClear = () => {
    setProgress(0);
  }

  return (
    <div className={styles.element}>
      <div className={styles.progress}>
        <span>{progress}</span>
      </div>
      <div className={styles.controls}>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  )
}

export default Progress;
