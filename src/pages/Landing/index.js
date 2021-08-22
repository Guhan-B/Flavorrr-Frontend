import Slider from "react-slick";

import PrimaryButton from "../../components/PrimaryButton";
import OutlineButton from "../../components/OutlineButton";
import RecipeCard from "../../components/RecipeCard";
import Navigation from "../../components/Navigation";

import styles from "./styles.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BOWL_IMAGE from "../../assets/images/bowl.png";
import RECIPE_ICON from "../../assets/icons/recipe.svg";
import CONTRIBUTER_ICON from "../../assets/icons/contribute.svg";
import CATEGORY_ICON from "../../assets/icons/category.svg";
import RATING_ICON from "../../assets/icons/rating.svg";

function LandingPage(props) {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
    };
    return (
        <>
            <section className={styles.showcase}>
                <Navigation />
                <div className={styles.container}>
                    <h1>Delicious Recipes <br /> For You</h1>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi pretium massa in felis faucibus, et blandit ligula fringilla.
                        Nam sit amet orci ante.
                    </p>
                    <div className={styles.actions}>
                        <PrimaryButton
                            onClick={() => props.history.push('/sign-up')}
                            type="button"
                            title="Join Flavorrr"
                        />
                        <OutlineButton
                            onClick={() => props.history.push('/search')}
                            type="button"
                            title="Browse Recipes"
                        />
                    </div>
                </div>
                <img className={styles.bowl} src={BOWL_IMAGE} />
            </section>
            <section className={styles.numbers}>
                <div className={styles.container}>
                    <div className={styles.number}>
                        <span className={styles.icon}>
                            <img src={RECIPE_ICON} alt="recipes" />
                        </span>
                        <span className={styles.text}>
                            <h2>400</h2>
                            <p>Avalible Recipes</p>
                        </span>
                    </div>
                    <div className={styles.number}>
                        <span className={styles.icon}>
                            <img src={CONTRIBUTER_ICON} alt="recipes" />
                        </span>
                        <span className={styles.text}>
                            <h2>105</h2>
                            <p>Contributers</p>
                        </span>
                    </div>
                    <div className={styles.number}>
                        <span className={styles.icon}>
                            <img src={CATEGORY_ICON} alt="recipes" />
                        </span>
                        <span className={styles.text}>
                            <h2>20</h2>
                            <p>Categories</p>
                        </span>
                    </div>
                    <div className={styles.number}>
                        <span className={styles.icon}>
                            <img src={RATING_ICON} alt="recipes" />
                        </span>
                        <span className={styles.text}>
                            <h2>200</h2>
                            <p>User Rating</p>
                        </span>
                    </div>
                </div>
            </section>
            <section className={[styles.trending, "trending"].join(" ")}>
                <div className={styles.container}>
                    <h1>Try the Trending Recipes</h1>
                    <Slider {...settings}>
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                    </Slider>
                </div>
            </section>
            <section className={styles.contribute}>
                <div className={styles.container}>
                    <h1>Have some amazing recipes? Helps us out by contributing</h1>
                    <PrimaryButton
                        onClick={() => props.history.push('/register')}
                        type="button"
                        title="Join Flavorrr"
                    />
                </div>
            </section>
            <footer className={styles.footer}>
                <div className={styles.container}>
                    <div>
                        <a>Browse Recipes</a>
                        <a>Trending</a>
                        <a>Register</a>
                        <a>Login</a>
                    </div>
                    <p>Copyrights &copy; 2021 Flavorrr</p>
                </div>
            </footer>
        </>
    )
}

export default LandingPage
