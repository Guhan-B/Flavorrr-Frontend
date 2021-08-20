import styles from "./styles.module.css";

import IMAGE_1 from "../../assets/images/image_1.jpg";
import IMAGE_2 from "../../assets/images/image_2.jpg";
import IMAGE_3 from "../../assets/images/image_3.jpg";
import IMAGE_4 from "../../assets/images/image_4.jpg";

function CollectionCard() {
    return (
        <div className={styles.card}>
            <div className={styles.thumbnail}>
                <div className={styles.latest}>
                    <img src={IMAGE_1} alt="latest" />
                </div>
                <div className={styles.others}>
                    <img src={IMAGE_2} alt="latest" />
                    <img src={IMAGE_3} alt="latest" />
                    <img src={IMAGE_4} alt="latest" />
                </div>
            </div>
            <div className={styles.collection_info}>
                <h3>Dinner Reference</h3>
                <p>20 Recipes <span>&middot;</span> 5 Creators</p>
            </div>
        </div>
    )
}

export default CollectionCard
