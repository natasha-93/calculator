import React, { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [operation, setOperation] = useState("");

  return (
    <div className={styles.calculator}>
      <div className={styles.display}>{operation}</div>
      <div className={styles.keypad}>
        <button onClick={(e) => setOperation("")} className={styles.clear}>
          AC
        </button>
        <button
          onClick={(e) => setOperation((operation) => operation + " / ")}
          className={styles.operator}
        >
          /
        </button>
        <button
          onClick={(e) => setOperation((operation) => operation + " * ")}
          className={styles.operator}
        >
          x
        </button>
        <button
          onClick={(e) => setOperation((operation) => operation + "7")}
          className={styles.number}
        >
          7
        </button>
        <button
          onClick={(e) => setOperation((operation) => operation + "8")}
          className={styles.number}
        >
          8
        </button>
        <button
          onClick={(e) => setOperation((operation) => operation + "9")}
          className={styles.number}
        >
          9
        </button>
        <button
          onClick={(e) => setOperation((operation) => operation + " - ")}
          className={styles.operator}
        >
          -
        </button>
        <button
          onClick={(e) => setOperation((operation) => operation + "4")}
          className={styles.number}
        >
          4
        </button>
        <button
          onClick={(e) => setOperation((operation) => operation + "5")}
          className={styles.number}
        >
          5
        </button>
        <button
          onClick={(e) => setOperation((operation) => operation + "6")}
          className={styles.number}
        >
          6
        </button>
        <button
          onClick={(e) => setOperation((operation) => operation + " + ")}
          className={styles.operator}
        >
          +
        </button>
        <button
          onClick={(e) => setOperation((operation) => operation + "1")}
          className={styles.number}
        >
          1
        </button>
        <button
          onClick={(e) => setOperation((operation) => operation + "2")}
          className={styles.number}
        >
          2
        </button>
        <button
          onClick={(e) => setOperation((operation) => operation + "3")}
          className={styles.number}
        >
          3
        </button>
        <button
          onClick={(e) => {
            setOperation((operation) =>
              String(eval(operation.replace(/^0+/, "")))
            );
          }}
          className={styles.equals}
        >
          =
        </button>
        <button
          onClick={(e) => setOperation((operation) => operation + "0")}
          className={styles.zero}
        >
          0
        </button>
        <button
          onClick={(e) => setOperation((operation) => operation + ".")}
          className={styles.number}
        >
          .
        </button>
      </div>
    </div>
  );
}

export default App;
