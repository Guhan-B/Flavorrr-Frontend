import Navigation from "../../components/Navigation";
import RecipeCard from "../../components/RecipeCard";
import OutlineButton from "../../components/OutlineButton";
import AccentButton from "../../components/AccentButton";
import Modal from "../../components/Modal";

import styles from "./styles.module.css";
import PROFILE from "../../assets/images/person.jpg";
import TextInput from "../../components/TextInput";
import TextareaInput from "../../components/TextareaInput";
import React from "react";

function CollectionPage() {
    const [showEdit, setShowEdit] = React.useState(false);

    return (
        <>
            <Navigation />
            <Modal visible={showEdit} hide={() => setShowEdit(false)}>
                <div className={styles.edit_modal}>
                    <header>
                        <h2>Edit Collection</h2>
                    </header>
                    <section>
                        <div>
                            <span>
                                <p className={styles.label}>Collection Name</p>
                                <p className={styles.length}>50</p>
                            </span>
                            <TextInput />
                        </div>
                        <div>
                            <span>
                                <p className={styles.label}>Description</p>
                                <p className={styles.length}>120</p>
                            </span>
                            <TextareaInput />
                        </div>
                    </section>
                    <footer>
                        <AccentButton
                            onClick={() => setShowEdit(false)}
                            title="Cancel"
                        />
                        <OutlineButton
                            type="primary"
                            onClick={() => setShowEdit(false)}
                            title="Save Changes"
                        />
                    </footer>
                </div>
            </Modal>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.name}>Friday Dinner</h1>
                    <p className={styles.count}>10 Recipes <span>&middot;</span> 4 Creators</p>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique massa eu neque tristique aliquet et at quam. Nullam sit amet augue ligula. Nulla facilisi. Donec eleifend orci erat, non ultricies mi faucibus et. Curabitur ut maximus est. Morbi tristique lectus sit amet nisi sollicitudin, ut venenatis velit tempor
                    </p>
                    <div className={styles.user_data}>
                        <div className={styles.user}>
                            <img src={PROFILE} />
                            <p>Monica Geller</p>
                        </div>
                        <div className={styles.actions}>
                            <OutlineButton type="primary" onClick={() => setShowEdit(true)} title="Edit Collection" />
                            <AccentButton type="danger" onClick={() => setShowEdit(true)} title="Delete Collection" />
                        </div>
                    </div>
                </div>
                <div className={styles.recipes}>
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                </div>
            </div>
        </>
    )
}

export default CollectionPage;
