import React from "react";

import TextInput from "../../components/TextInput";
import TextareaInput from "../../components/TextareaInput";
import OutlineButton from "../../components/OutlineButton";
import AccentButton from "../../components/AccentButton";

import styles from "./styles.module.css";
import FACEBOOK from "../../assets/icons/social/facebook.svg";
import INSTAGRAM from "../../assets/icons/social/instagram.svg";
import LINKEDIN from "../../assets/icons/social/linkedin.svg";
import TWITTER from "../../assets/icons/social/twitter.svg";
import YOUTUBE from "../../assets/icons/social/youtube.svg";
import BANNER from "../../assets/images/banner.jpg";
import PROFILE from "../../assets/images/person.jpg";
import EDIT from "../../assets/icons/Edit(White).svg";

function EditProfile(props) {
    const tabs = [
        { name: "Edit Profile", caption: "Update your information avalible in Flavorrr" },
        { name: "Account Settings", caption: "Modify your Flavorrr account as you need" },
        { name: "Social Profiles", caption: "Link your social profiles for people to reach out" },
        { name: "Following", caption: "Edit the list of peoples you follow" },
        { name: "Follower", caption: "Control the list of peoples who follows you" },
    ]

    const [activeTab, setActiveTab] = React.useState(tabs[0]);

    return (
        <div className={styles.container}>
            <header>
                <h1>{activeTab.name}</h1>
                <p>{activeTab.caption}</p>
            </header>
            <div className={styles.edit_section}>
                <nav>
                    {
                        tabs.map(
                            tab =>
                                <button
                                    onClick={() => setActiveTab(tab)}
                                    className={tab.name === activeTab.name ? styles.active : ""}>
                                    {tab.name}
                                </button>
                        )
                    }
                </nav>
                <div className={styles.selected_setting}>
                    {activeTab.name === "Edit Profile" && <EditProfileTab />}
                    {activeTab.name === "Social Profiles" && <SocialProfilesTab />}
                    {activeTab.name === "Account Settings" && <AccountSettingsTab />}
                    {activeTab.name === "Following" && <FollowingTab />}
                    {activeTab.name === "Follower" && <FollowerTab />}
                </div>
            </div>
        </div>
    )
}

const EditProfileTab = () => {
    const [banner, setBanner] = React.useState(BANNER);
    const [profile, setProfile] = React.useState(PROFILE);
    // onChange={(e) => setImage(e.target.files[0])} id="profile" accept="image/*" type="file"
    return (
        <div className={styles.edit_profile}>
            <span className={styles.input_group}>
                <label>
                    <p className={styles.input_name}>Profile and Banner</p>
                </label>
                <div className={styles.images}>
                    <div className={styles.profile_image}>
                        <label htmlFor="profile">
                            <img className={styles.preview} src={profile} />
                            <div className={styles.hover} >
                                <img src={EDIT} />
                            </div>
                        </label>
                        <input />
                    </div>
                    <div className={styles.banner_image}>
                        <label htmlFor="banner">
                            <img className={styles.preview} src={banner} />
                            <div className={styles.hover}>
                                <img src={EDIT} />
                            </div>
                        </label>
                        <input id="banner" type="file" />
                    </div>
                </div>
            </span>
            <span className={styles.input_group}>
                <label>
                    <p className={styles.input_name}>Name</p>
                </label>
                <TextInput />
            </span>
            <span className={styles.input_group}>
                <label>
                    <p className={styles.input_name}>Location</p>
                </label>
                <TextInput />
            </span>
            <span className={styles.input_group}>
                <label>
                    <p className={styles.input_name}>Bio</p>
                    <p className={styles.input_count}>200</p>
                </label>
                <TextareaInput />
            </span>
        </div>
    );
}

const AccountSettingsTab = () => {
    return (
        <div className={styles.edit_profile}>
            <span className={styles.input_group}>
                <label>
                    <p className={styles.input_name}>Username</p>
                </label>
                <TextInput />
                <p className={styles.input_tip}>For your flavorrr profile URL: flavorrr.co/MrKnowhere</p>
            </span>
            <span className={styles.input_group}>
                <label>
                    <p className={styles.input_name}>Email</p>
                </label>
                <TextInput />
            </span>
            <div className={[styles.account_section].join(" ")}>
                <h2>Reset Password</h2>
                <p className={styles.description}>You can change your account password here. You will be logged out of all the machines after changing password</p>
                <OutlineButton title="Reset Password" />
            </div>
            <div className={[styles.delete_account, styles.account_section].join(" ")}>
                <h2>Delete your account</h2>
                <p className={styles.description}>Deleting your account will remove all your recipes and user data that you have in Flavorrr. This action is not recoverable. Think twice before proceeding</p>
                <OutlineButton title="Delete Account" type="danger" />
            </div>
        </div>
    );
}

const SocialProfilesTab = () => {
    const acceptedSocialLinks = [
        {
            name: "Facebook",
            icon: FACEBOOK,
        },
        {
            name: "Instagram",
            icon: INSTAGRAM,
        },
        {
            name: "Twitter",
            icon: TWITTER,
        },
        {
            name: "Youtube",
            icon: YOUTUBE,
        },
        {
            name: "LinkedIn",
            icon: LINKEDIN,
        }
    ];

    return (
        <div className={styles.edit_profile}>
            {
                acceptedSocialLinks.map(
                    item =>
                        <span className={styles.input_group}>
                            <label>
                                <p className={styles.input_name}>{item.name}</p>
                            </label>
                            <TextInput icon={item.icon} />
                        </span>
                )
            }
        </div>
    )
}

const FollowingTab = () => {
    return (
        <div className={styles.people_list_tab}>
            <PeopleList action="Unfolow" />
        </div>
    )
}

const FollowerTab = () => {
    return (
        <div className={styles.people_list_tab}>
            <PeopleList action="Remove" />
        </div>
    )
}

const PeopleList = (props) => {
    const data = [
        {
            name: "Joey Tribianni",
            followerCount: 400,
        },
        {
            name: "Pheobe Buffay",
            followerCount: 200,
        },
        {
            name: "Chandler Bing",
            followerCount: 100,
        },
        {
            name: "Monica Geller",
            followerCount: 400,
        },
        {
            name: "Ross Geller",
            followerCount: 400,
        },
        {
            name: "Rachel Green",
            followerCount: 200,
        },
    ]

    return (
        <div className={styles.people}>
            {
                data.map(e =>
                    <div className={styles.person}>
                        <img src={PROFILE} />
                        <div>
                            <h3>{e.name}</h3>
                            <p>{e.followerCount} Follower</p>
                        </div>
                        <AccentButton type="danger" title={props.action} />
                    </div>
                )
            }
        </div>
    )
}

export default EditProfile;
