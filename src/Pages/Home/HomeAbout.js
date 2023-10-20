import jayProfile from "../../SharedComponents/Imgs/SoloImages/Jay/jayProfile1.jpg";
import asenProfile from "../../SharedComponents/Imgs/SoloImages/Asen/asenProfile1.jpg";

const HomeAbout = () => {
    return (
        <div className="HomeAboutContainer">
            <div className="LatestProjectContainer">
                <h2 className="HomeProjectHeader">ABOUT</h2>
                <h2 className="HomeProjectHeader later">Jay & Asen</h2>
            </div>
            <div className="RedUnderLine" />
            <div className="homeProfile">
                <img src={jayProfile} className="profileImage" />
                <div className="homeProfileContainer">
                    <h4 className="homeProfileHeaderContainer">
                        <h4 className="homeProfileHeader">
                            Hi, My Name Is
                        </h4>
                        <h4 className="homeProfileHeader later">
                            Jay Seung Yeon Lee
                        </h4>
                    </h4>
                    <div className="profileUnderLine" />
                    <div className="profileText">
                        Hey there! I'm Jay Lee, a fullstack engineer with an unwavering passion for bringing digital dreams to life.
                        I specialize in the art of creating dynamic, user-friendly websites and mobile applications using React and React Native.
                    </div>
                </div>
            </div>
            <div className="homeProfile">
                <div className="homeProfileContainer">
                    <h4 className="homeProfileHeaderContainer">
                        <h4 className="homeProfileHeader">
                            Hi, My Name Is
                        </h4>
                        <h4 className="homeProfileHeader later">
                            Asen Woo Chang Lee
                        </h4>
                    </h4>
                    <div className="profileUnderLine" />
                    <div className="profileText">
                        Hey there! I'm Jay Lee, a fullstack engineer with an unwavering passion for bringing digital dreams to life.
                        I specialize in the art of creating dynamic, user-friendly websites and mobile applications using React and React Native.
                    </div>
                </div>
                <img src={asenProfile} className="profileImage" />
            </div>
        </div>
    );
};

export default HomeAbout;