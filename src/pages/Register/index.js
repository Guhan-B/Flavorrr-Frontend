import PrimaryButton from "../../components/PrimaryButton";
import TextInput from "../../components/TextInput";
import PasswordInput from "../../components/PasswordInput";

import styles from "./styles.module.css";
import LOGO from "../../assets/Flavorrr.svg";
import MAIL_ICON from "../../assets/icons/Message.svg";
import PROFILE_ICON from "../../assets/icons/Profile.svg";

function RegisterPage() {
    return (
        <div className={styles.container}>
            <div className={styles.form_section}>
                <header>
                    <img src={LOGO} alt="LOGO" />
                </header>
                <section>
                    <h1>Join Flavorrr</h1>
                    <p>Become a part of an amazing food community! fill the necessary details below</p>
                    <form>
                        <TextInput icon={PROFILE_ICON} placeholder="Full Name" />
                        <TextInput icon={MAIL_ICON} placeholder="Email Address" />
                        <PasswordInput placeholder="Password" />
                        <PasswordInput placeholder="Confirm Password" />
                        <div className={styles.footer}>
                            <p>Forget Password?</p>
                        </div>
                        <PrimaryButton title="Register" type="button" />
                    </form>
                    <footer>
                        <p>Already have an account? <span>Login Here</span></p>
                    </footer>
                </section>
            </div>
            <div className={styles.image}></div>
        </div>
    )
}

export default RegisterPage;
