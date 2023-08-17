import styles from "./Chart.module.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  const values = props.datapoints.map((p) => p.value)
  const maxValue = Math.max(...values)

  return (
    <div className={styles["chart"]}>
      {props.datapoints.map(d => (
        <ChartBar
          value={d.value}
          maxValue={maxValue}
          label={d.label}
          key={d.label}
        />
      ))}
    </div>
  );
}

export default Chart;
