import styles from "./styles.module.css";

function Modal(props) {
    return (
        <>
            {props.visible && <div className={styles.modal}>{props.children}</div>}
            {props.visible && <div className={styles.backdrop}></div>}
        </>
    )
}

export default Modal;
