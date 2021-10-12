import styles from "./styles.module.css";
import PROFILE from  "../../assets/images/person.jpg";
import IMAGE from "../../assets/images/register-image.jpg";
import VEG from "../../assets/icons/Veg.svg";
import HEART from "../../assets/icons/heart.svg";
import BOOKMARK from "../../assets/icons/Bookmark.svg";
import { withRouter } from "react-router-dom";

function RecipeCard(props) {
    const onCardClick = () => {

    }

    return (
        <div className={styles.card} onClick={onCardClick}>
            <div className={styles.header}>
                <img className={styles.thumbnail} src={IMAGE} alt="" />
                <div className={styles.actions}>
                    <button>
                        <img src={HEART} />
                    </button>
                    <button>
                        <img src={BOOKMARK}/>
                    </button>
                </div>
            </div>
            <div className={styles.body}>
                <div className={styles.tag_n_type}>
                    <span>Sweets & Snacks</span>
                    <img src={VEG} />
                </div>
                <h2 className={styles.name}>Schezwan paneer pan fried momos</h2>
                <span className={styles.author}>
                    <img src={PROFILE}/>
                    <p>Monica Geller</p>
                </span>
                <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat massa non nisl molestie, sit amet auctor elit bibendum</p>
                <div className={styles.rating}>
                    <p>250 Likes <span>&middot;</span> 1 month ago</p>
                </div>
            </div>
        </div>
    )
}

export default withRouter(RecipeCard);
