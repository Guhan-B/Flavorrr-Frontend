import styles from "./styles.module.css";
import IMAGE from "../../assets/images/register-image.jpg";
import VEG from "../../assets/icons/Veg.svg";

function RecipeCard() {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <img src={IMAGE} alt="" />
            </div>
            <div className={styles.body}>
                <div className={styles.tag_n_type}>
                    <span>Sweets & Snacks</span>
                    <img src={VEG} />
                </div>
                <h2 className={styles.name}>Schezwan paneer pan fried momos</h2>
                <p className={styles.author}>By Monica Geller</p>
                <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat massa non nisl molestie, sit amet auctor elit bibendum</p>
                <div className={styles.rating}>
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <p>(255)</p>
                </div>
            </div>
        </div>
    )
}

export default RecipeCard;
