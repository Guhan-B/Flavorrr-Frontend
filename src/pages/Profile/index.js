import React from "react";
import { useLocation } from "react-router-dom";

import Navigation from "../../components/Navigation";
import PrimaryButton from "../../components/PrimaryButton";
import OutlineButton from "../../components/OutlineButton";
import RecipeCard from "../../components/RecipeCard";
import CollectionCard from "../../components/CollectionCard";

import styles from "./styles.module.css";

import PERSON from "../../assets/images/person.jpg";
import BANNER from "../../assets/images/banner.jpg";
import VISIT_ICON from "../../assets/icons/Visit.svg";
import EDIT_ICON from "../../assets/icons/Edit.svg";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function ProfilePage(props) {
    const query = useQuery();
    const tabs = ["Recipes", "Collections", "Liked Recipes"];

    const onTabClick = (tab) => {
        props.history.replace({
            pathname: '/profile',
            search: `?tab=${tab}`
        })
    }

    const getActiveTab = () => {
        const tab = query.get("tab");
        console.log(tab, tab in tabs);
        if (tabs.includes(tab)) {
            return tab;
        } else {
            return tabs[0];
        }
    }

    return (
        <>
            <Navigation />
            <div className={styles.container}>
                <div className={styles.width_wrapper}>
                    <header>
                        <div className={styles.images}>
                            <img className={styles.profile} src={PERSON} alt="profile picture" />
                            <img className={styles.banner} src={BANNER} alt="banner picture" />
                        </div>
                        <div className={styles.text}>
                            <h1>Monica Geller</h1>
                            <p className={styles.location_and_count}>Chennai, India <span>&middot;</span> 344 Followers</p>
                            <p className={styles.bio}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat massa non nisl molestie, sit amet auctor elit bibendum, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat massa non nisl molestie, sit amet auctor elit bibendum
                            </p>

                        </div>
                        <div className={styles.actions}>
                            <PrimaryButton title="Follow" />
                            <OutlineButton title="Visit Website" icon={VISIT_ICON} />
                            <PrimaryButton title="Upload Recipe" />
                            <OutlineButton title="Edit Profile" icon={EDIT_ICON} />
                        </div>
                    </header>
                    <section className={styles.tab_header}>
                        {
                            tabs.map(tab =>
                                <button
                                    key={tab}
                                    className={tab === getActiveTab() ? styles.active : ""}
                                    onClick={() => onTabClick(tab)}
                                >
                                    {tab}
                                </button>
                            )
                        }
                    </section>
                    <section className={styles.tab_container}>
                        {
                            getActiveTab() === tabs[0] &&
                            <div className={styles.recipes_tab}>
                                <RecipeCard />
                                <RecipeCard />
                                <RecipeCard />
                                <RecipeCard />
                                <RecipeCard />
                                <RecipeCard />
                            </div>
                        }

                        {
                            getActiveTab() === tabs[1] &&
                            <div className={styles.collections_tab}>
                                <CollectionCard />
                                <CollectionCard />
                            </div>
                        }

                        {
                            getActiveTab() === tabs[2] &&
                            <div className={styles.recipes_tab}>
                                <RecipeCard />
                                <RecipeCard />
                                <RecipeCard />
                                <RecipeCard />
                            </div>
                        }
                    </section>
                </div>
            </div>
        </>
    )
}

export default ProfilePage
