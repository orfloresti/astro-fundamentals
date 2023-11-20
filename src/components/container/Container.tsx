import Progress from "../progress/Progress";
import styles from "./container.module.scss";

const Container = () => {
  const elements = new Array();
  for(let i = 0; i < 100; i++){
    elements.push(0);
  }

  return (
    <div className={styles.container}>
      {elements.map((_, i) => <Progress key={i} />)}		  
	  </div>
  )
}

export default Container;