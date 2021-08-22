import PrimaryButton from "../../components/PrimaryButton";
import CheckInput from "../../components/CheckInput";
import TextInput from "../../components/TextInput";
import PasswordInput from "../../components/PasswordInput";

import styles from "./styles.module.css";
import LOGO from "../../assets/Flavorrr.svg";
import MAIL_ICON from "../../assets/icons/Message.svg";

function LoginPage() {
    return (
        <div className={styles.container}>
            <div className={styles.form_section}>
                <img className={styles.form_logo} src={LOGO} alt="LOGO" />
                <section>
                    <h1>Login to Flavorrr</h1>
                    <p>Welcome back! login with your data that you entered during registration </p>
                    <form>
                        <TextInput icon={MAIL_ICON} placeholder="Email Address" />
                        <PasswordInput placeholder="Password" />
                        <div className={styles.footer}>
                            <CheckInput
                                id="remember-me"
                                label="Remember Me"
                                name="remember-me"
                                value={true}
                                labelSize="0.85rem"
                            />
                            <p>Forget Password?</p>
                        </div>
                        <PrimaryButton title="Login" type="button" />
                    </form>
                    <footer>
                        <p>Don’t have an account? <span>Register Here</span></p>
                    </footer>
                </section>
            </div>
            <div className={styles.image}></div>
        </div>
    )
}

export default LoginPage
