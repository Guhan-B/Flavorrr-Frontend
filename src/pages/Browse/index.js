import React from 'react'

import RecipeCard from "../../components/RecipeCard";
import Modal from "../../components/Modal";
import OutlineButton from "../../components/OutlineButton";

import styles from "./styles.module.css";
import FILTER_ICON from "../../assets/icons/Filter.svg";
import SEARCH_ICON from "../../assets/icons/Search.svg";
import ARROW_ICON from "../../assets/icons/Arrow - Down.svg";

function BrowsePage(props) {
    const [showType, setShowType] = React.useState(false);
    const [type, setType] = React.useState("Recipes");

    const toggleType = () => {
        setShowType(state => !state);
    }

    return (
        <>
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
                    <div className={styles.search}>
                        <img src={SEARCH_ICON} />
                        <input />
                        <div className={styles.select}>
                            <div className={styles.selected_option} onClick={toggleType}>
                                <p>{type}</p>
                                <img src={ARROW_ICON}></img>
                            </div>
                            {
                                showType &&
                                <ul className={styles.options}>
                                    <li onClick={() => {setType("Members");toggleType();}}>Members</li>
                                    <li onClick={() => {setType("Recipes");toggleType();}}>Recipes</li>
                                </ul>
                            }
                        </div>
                    </div>
                    <div className={styles.search_group}>
                        <h3 className={styles.result_heading}>Search results for "Momo"</h3>
                        <OutlineButton type="primary" title="Filter" icon={FILTER_ICON} />
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
