import styles from "./styles.module.css";

function OutlineButton(props) {
    const classes = [styles.button, styles[props.type]].join(" ");
    return (
        <button className={classes} type={props.action} onClick={props.onClick}>
            {props.icon && <img src={props.icon} />}
            <p>{props.title}</p>
        </button>
    )
}

export default OutlineButton;
