import React from "react";
import parser from "html-react-parser";
import { v4 as uuid } from "uuid";

import TextInput from "../../components/TextInput";
import SelectInput from "../../components/SelectInput";
import Editor from "../../components/Editor";
import PrimaryButton from "../../components/PrimaryButton";
import OutlineButton from "../../components/OutlineButton";
import AccentButton from "../../components/AccentButton";

import styles from "./style.module.css";

function UploadPage() {
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [description, setDescription] = React.useState("");
  const [instruction, setInstruction] = React.useState("");
  const [ingeridants, setIngeridants] = React.useState([]);

  // Intermidate state for adding ingeridants
  const [name, setName] = React.useState("Sample Ingeridant");
  const [quantity, setQuantity] = React.useState("10");
  const [unit, setUnit] = React.useState("Nos");

  const onImagePick = (e) => {
    const image = e.target.files[0];
    if (image) {
      const result = URL.createObjectURL(image);
      console.log(result);
      setSelectedImage(result);
    }
  };

  const typeOptions = [
    { label: "Vegetarian", value: "Vegetarian" },
    { label: "Non-Vegetarian", value: "Non-Vegetarian" },
    { label: "Contains Egg", value: "Contains Egg" },
  ];

  const difficultyOptions = [
    { label: "Easy", value: "Easy" },
    { label: "Medium", value: "Medium" },
    { label: "Hard", value: "Hard" },
    { label: "Expert", value: "Expert" },
  ];

  const unitOptions = [
      {label: "Nos", value: "Nos"},
      {label: "ML", value: "ML"},
      {label: "L", value: "L"},
      {label: "Tbsp", value: "Tbsp"},
      {label: "Tsp", value: "Tsp"},
      {label: "Cup", value: "Cup"},
      {label: "g", value: "g"},
      {label: "Kg", value: "Kg"},
  ]

  const addIngeridant = () => {
    // add state resetting after adding ingeridant
    const newIngeridants = [
      ...ingeridants,
      {
        id: uuid(),
        name: name,
        quantity: quantity,
        unit: unit,
      },
    ];

    setIngeridants(newIngeridants);
  };

  const removeIngeridant = (id) => {
    const newIngeridants = ingeridants.filter((item) => item.id != id);
    setIngeridants(newIngeridants);
  };

  const onImageRemove = (e) => {
    e.preventDefault();
    setSelectedImage(null);
  };

  return (
    <div className={styles.container}>
      <header className={styles.recipe_name}>
        <input placeholder="Give your recipe a name" />
        <span></span>
      </header>
      <div className={styles.recipe_image}>
        <label
          onContextMenu={onImageRemove}
          htmlFor="image"
          className={styles.preview}
        >
          {selectedImage === null && (
            <div className={styles.placeholder}>
              Upload an image for your recipe
            </div>
          )}
          {selectedImage && (
            <div className={styles.image}>
              <img src={selectedImage} />
              <div className={styles.overlay}>Left click to change or Right click to remove</div>
            </div>
          )}
        </label>
        <input id="image" accept="image/*" type="file" onChange={onImagePick} />
      </div>
      <div className={styles.recipe_meta}>
        <div className={styles.input_group}>
          <label>Serves</label>
          <TextInput postfix="Nos" />
        </div>
        <div className={styles.input_group}>
          <label>Cooking Time</label>
          <TextInput postfix="Min" />
        </div>
        <div className={styles.input_group}>
          <label>Difficulty</label>
          <SelectInput options={difficultyOptions} />
        </div>
        <div className={styles.input_group}>
          <label>Type</label>
          <SelectInput options={typeOptions} />
        </div>
        <div className={styles.input_group}>
          <label>Category</label>
          <SelectInput options={[]} />
        </div>
        <div className={styles.input_group}>
          <label>Cuisine</label>
          <SelectInput options={[]} />
        </div>
      </div>
      <div className={styles.recipe_ingeridants}>
        <label className={styles.label}>Recipe Ingeridants</label>
        <ul>
          {ingeridants.map((item) => (
            <li key={item.id}>
              <p className={styles.name}>{item.name}</p>
              <p className={styles.quantity}>
                {item.quantity} {item.unit}
              </p>
              <button
                onClick={removeIngeridant.bind(this, item.id)}
                className={styles.remove}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <div className={styles.input}>
          <TextInput placeholder="Name" />
          <TextInput placeholder="Quantity" />
          <SelectInput placeholder="Unit" options={unitOptions} />
          <OutlineButton title="Add" type="primary" onClick={addIngeridant} />
        </div>
      </div>
      <div className={styles.recipe_description}>
        <label className={styles.label}>Recipe Description</label>
        <Editor text={description} onChange={(text) => setDescription(text)} />
        <div className={styles.description_preview}>{parser(description)}</div>
      </div>
      <div className={styles.recipe_instruction}>
        <label className={styles.label}>Cooking Instructions</label>
        <Editor text={instruction} onChange={(text) => setInstruction(text)} />
        <div className={styles.instruction_preview}>{parser(instruction)}</div>
      </div>
      <footer className={styles.recipe_actions}>
        <AccentButton title="Discard" type="danger" />
        <AccentButton title="Save Draft" type="primary" />
        <PrimaryButton title="Publish" type="primary" />
      </footer>
    </div>
  );
}

export default UploadPage;
