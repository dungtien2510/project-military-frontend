import styles from "./Button.module.css";
function Button(props) {
  const { nameButton, type } = props;
  return (
    <button
      className={
        type === "submit"
          ? styles.button
          : `${styles.button} ${styles["button-reset"]}`
      }
      type={type}
    >
      {nameButton}
    </button>
  );
}
export default Button;
