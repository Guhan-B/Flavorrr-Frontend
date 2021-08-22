import Navigation from "../../components/Navigation";
import RecipeCard from "../../components/RecipeCard";
import Modal from "../../components/Modal";
import PrimaryButton from "../../components/PrimaryButton";
import OutlineButton from "../../components/OutlineButton";
import TextInput from "../../components/TextInput";

import styles from "./styles.module.css";
import FILTER_ICON from "../../assets/icons/Filter.svg";
import SEARCH_ICON from "../../assets/icons/Search.svg";

function BrowsePage(props) {
    return (
        <>
            <Navigation />
            {/* <Modal>
                <header>
                    <h2>Filters</h2>

                </header>
                <div className={styles.options}>

                </div>
                <footer>
                    <button>Apply</button>
                </footer>
            </Modal> */}
            <section className={styles.container}>
                <header>
                    <div className={styles.search_group}>
                        <h3 className={styles.result_heading}>Search results for "Momo"</h3>
                        <OutlineButton title="Filter" icon={FILTER_ICON} />
                    </div>
                </header>

                <div className={styles.search_results}>
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                </div>
            </section>
        </>
    )
}

export default BrowsePage;
