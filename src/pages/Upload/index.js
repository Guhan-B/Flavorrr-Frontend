import React from 'react';

import TextInput from "../../components/TextInput";
import SelectInput from '../../components/SelectInput';

import styles from "./style.module.css";

function UploadPage() {
    const [selectedImage, setSelectedImage] = React.useState(null);

    const onImagePick = (e) => {
        const image = e.target.files[0];
        if (image) {
            const result = URL.createObjectURL(image);
            console.log(result);
            setSelectedImage(result)
        }
    }

    return (
        <div className={styles.container}>
            <header className={styles.recipe_name}>
                <input placeholder="Give your recipe a name" />
                <span></span>
            </header>
            <div className={styles.recipe_image}>
                <label htmlFor="image" className={styles.preview}>
                    {selectedImage === null && <div className={styles.placeholder}>Upload an image for your recipe</div>}
                    {selectedImage && <img src={selectedImage} />}
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
                    <SelectInput />
                </div>
                <div className={styles.input_group}>
                    <label>Type</label>
                    <SelectInput />
                </div>
                <div className={styles.input_group}>
                    <label>Category</label>
                    <SelectInput />
                </div>
                <div className={styles.input_group}>
                    <label>Type</label>
                    <SelectInput />
                </div>
            </div>
        </div>
    )
}

export default UploadPage;
