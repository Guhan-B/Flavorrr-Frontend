import styles from "./styles.module.css";

function Modal(props) {
    return (
        <>
            <div className={styles.modal}>
                {props.children}
            </div>
            <div className={styles.backdrop}></div>
        </>
    )
}

export default Modal;
