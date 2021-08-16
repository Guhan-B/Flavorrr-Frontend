import styles from "./styles.module.css";

function RadioInput(props) {
    console.log(props);
    return (
        <>
            <input className={styles.radio_input} name={props.name} type="checkbox" id={props.id} />
            <div className={styles.input_group}>
                <label htmlFor={props.id} className={styles.radio}>
                    <div className={styles.active}></div>
                </label>
                <label style={{fontSize: props.labelSize}} htmlFor={props.id}>{props.label}</label>
            </div>
        </>
    )
}

export default RadioInput;
