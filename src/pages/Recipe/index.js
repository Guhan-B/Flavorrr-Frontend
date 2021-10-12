import React from "react";
import parser from "html-react-parser";

import styles from "./styles.module.css";

import PROFILE from "../../assets/images/person.jpg";
import HEART from "../../assets/icons/heart(Grey).svg";
import BOOKMARK from "../../assets/icons/Bookmark(Grey).svg";
import RECIPE from "../../assets/images/image_3.jpg";
import COMMENT from "../../assets/icons/Chat(Grey).svg";

function RecipePage() {
    const [text,setText] = React.useState("");
    const dummy = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id ante quis arcu viverra feugiat. Phasellus vulputate egestas orci, <i>ac faucibus quam congue</i> sit amet. Ut ex ipsum, varius sed elit eget, tristique congue leo.</p><p>&nbsp;</p><h3>Making the batter</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id ante quis arcu viverra feugiat. Phasellus vulputate egestas orci, ac faucibus quam congue sit amet. Ut ex ipsum, varius sed elit eget, tristique congue leo. Aliquam eu dictum metus, in ultrices neque. Proin <a href="http://localhost:3000/recipe/1">auctor odio magna</a>, fermentum varius magna aliquam accumsan. Nunc vel sem et lectus commodo bibendum. Sed consectetur aliquet est sed sodales.</p><p>Some important points to remember</p><p>&nbsp;</p><ul><li>Lorem ipsum <strong>dolor sit ame</strong>t, consectetur adipiscing elit. Etiam id ante quis arcu viverra feugiat. Phasellus vulputate egestas orci.</li><li>Aliquam eu dictum metus, in ultrices neque. Proin auctor odio magna, fermentum varius magna aliquam accumsan.</li><li>Nunc vel sem et lectus commodo bibendum.</li></ul><p>&nbsp;</p><h3>Let's start with the main recipe</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id ante quis arcu viverra feugiat. Phasellus vulputate egestas orci, ac faucibus quam congue sit amet. Ut ex ipsum, varius sed elit eget, tristique congue leo. Aliquam eu dictum metus, in ultrices neque. Proin auctor odio magna, fermentum varius magna aliquam accumsan.</p><p>&nbsp;</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id ante quis arcu viverra feugiat. Phasellus vulputate egestas orci, ac faucibus quam congue sit amet. Ut ex ipsum, varius sed elit eget, tristique congue leo. Aliquam eu dictum metus, in ultrices neque. Proin auctor odio magna, fermentum varius magna aliquam accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id ante quis arcu viverra feugiat. Phasellus vulputate egestas orci, ac faucibus quam congue sit amet.</p><p>&nbsp;</p><h3>Yayy! The recipe is done</h3><p>Aliquam eu dictum metus, in ultrices neque. Proin auctor odio magna, fermentum varius magna aliquam accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id ante quis arcu viverra feugiat. Phasellus vulputate egestas orci, ac faucibus quam congue sit amet.</p>`
    return (
        <div className={styles.container}>
            <div className={styles.tag_n_type}>
                <span>Sweets & Snacks</span>
                <span>Indian Cusian</span>
                <span>Veg</span>
            </div>
            <h1>Schezwane paneer pan fired momos</h1>
            <section className={styles.below_name}>
                <div className={styles.creator}>
                    <img src={PROFILE} />
                    <span>
                        <p className={styles.name}>Monica Geller</p>
                        <p className={styles.date}>2021, Aug 12</p>
                    </span>
                </div>
                <div className={styles.actions}>
                    <span>
                        <button>
                            <img src={HEART} />
                        </button>
                        <p>200</p>
                    </span>
                    <button>
                        <img src={BOOKMARK} />
                    </button>
                    <button>
                        <img src={COMMENT} />
                    </button>
                </div>
            </section>
            <div className={styles.details}>
                <span>Serves: 3 Nos</span>
                <span>Cooking Time: 30 Min</span>
                <span>Difficulty: Medium</span>
            </div>
            <img src={RECIPE} className={styles.recipe_image} />
            <section className={styles.recipe_description}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id ante quis arcu viverra feugiat. Phasellus vulputate egestas orci, ac faucibus quam congue sit amet. Ut ex ipsum, varius sed elit eget, tristique congue leo. Aliquam eu dictum metus, in ultrices neque. Proin auctor odio magna, fermentum varius magna aliquam accumsan. Nunc vel sem et lectus commodo bibendum. Sed consectetur aliquet est sed sodales.
                </p>
            </section>
            <section className={styles.recipe_ingredients}>
                <h2>INGREDIENTS</h2>
                <ul>
                    <li>
                        <p className={styles.name}>Fresh coconut</p>
                        <p className={styles.quantity}>1 cup</p>
                    </li>
                    <li>
                        <p className={styles.name}>Green chillies</p>
                        <p className={styles.quantity}>3 nos</p>
                    </li>
                    <li>
                        <p className={styles.name}>Roasted chana dal</p>
                        <p className={styles.quantity}>0.5 cup</p>
                    </li>
                    <li>
                        <p className={styles.name}>Cumin powder</p>
                        <p className={styles.quantity}>2 tsp</p>
                    </li>
                    <li>
                        <p className={styles.name}>Jeera powder</p>
                        <p className={styles.quantity}>2 tbsp</p>
                    </li>
                    <li>
                        <p className={styles.name}>Fresh cream</p>
                        <p className={styles.quantity}>1 cup</p>
                    </li>
                    <li>
                        <p className={styles.name}>Lorem ipsum dolor sit amet</p>
                        <p className={styles.quantity}>2 tbsp</p>
                    </li>
                </ul>
            </section>
            <section className={styles.recipe_method}>
                <h2>METHOD</h2>
                <div className={styles.method_text}>
                    {parser(dummy)}
                </div>
            </section>
        </div>
    )
}

export default RecipePage;
