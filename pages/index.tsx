import styles from "../styles/Home.module.css";
import TodosContainer from "./components/TodosContainer";

export default function Home() {
  return (
    <div className={styles.container}>
      <TodosContainer />
    </div>
  );
}
