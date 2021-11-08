import React from "react";
import styles from "./styles.module.css";

function SelectInput(props) {
  const [inputStyle, setInputStyle] = React.useState({
    backgroundColor: "var(--grey-light-color)",
  });
  const [value, setValue] = React.useState("");

	const ref = React.useRef();

  const onSelectInputFocus = (e) => {
		setInputStyle({
			backgroundColor: "var(--white-color)",
      boxShadow: "0 0 0 4px rgba(255, 128, 93, 0.1)",
      border: "1px solid var(--primary-light-color)",
    });
		ref.current.style.display = 'flex';
  };

  const onSelectInputBlur = (e) => {
    setInputStyle({
      backgroundColor: "var(--grey-light-color)",
      boxShadow: "none",
      border: "1px solid transparent",
    });
		setTimeout(() => ref.current.style.display = 'none', 150);
		;
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div style={inputStyle} className={styles.input_group}>
      {props.icon && (
        <img className={styles.icon} src={props.icon} alt="icon" />
      )}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={props.placeholder}
        onFocus={onSelectInputFocus}
        onBlur={onSelectInputBlur}
      />
      <ul
        id="options"
        ref={ref}
        className={styles.options}
      >
        {props.options.map((option) => (
          <li
            key={option.label}
            onClick={(e) => {
              e.preventDefault();
              setValue(option.value);
            }}
          >
            {option.label}
          </li>
        ))}
      </ul>
      {props.postfix && <span className={styles.postfix}>{props.postfix}</span>}
    </div>
  );
}

export default SelectInput;
