import Navigation from "../../components/Navigation";
import RecipeCard from "../../components/RecipeCard";

import styles from "./styles.module.css";

function BrowsePage(props) {
    return (
        <>
            <Navigation />
            <section className={styles.container}>
                <header>
                    <div className={styles.search_group}>
                        <input type="text" />
                    </div>
                </header>
            </section>
        </>
    )
}

export default BrowsePage;
