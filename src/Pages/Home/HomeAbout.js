import jayProfile from "../../SharedComponents/Imgs/SoloImages/Jay/jayProfile1.jpg";
import asenProfile from "../../SharedComponents/Imgs/SoloImages/Asen/asenProfile1.jpg";
import { Link } from "react-router-dom";

const HomeAbout = () => {
    return (
        <div className="HomeAboutContainer">
            <div className="LatestProjectContainer">
                <h2 className="HomeProjectHeader">ABOUT</h2>
                <h2 className="HomeProjectHeader later">Jay & Asen</h2>
            </div>
            <div className="RedUnderLine" />
            <div className="homeProfile">
                <img src={jayProfile} alt="Jay Lee's profile" className="profileImage" />
                <div className="homeProfileContainer">
                    <div className="homeProfileHeaderContainer">
                        <h4 className="homeProfileHeader">
                            Hi, My Name Is
                        </h4>
                        <h4 className="homeProfileHeader later">
                            Jay Seung Yeon Lee
                        </h4>
                    </div>
                    <div className="profileUnderLine" />
                    <div className="profileText">
                        Hey there! I'm Jay Lee, a fullstack engineer with an unwavering passion for bringing digital dreams to life. I specialize in the art of creating dynamic, user-friendly websites and mobile applications using React and React Native.
                        <br />
                        <br />
                        My palette includes HTML, CSS, and JavaScript framework such as React and React Native.I believe that a website should not only meet its functional goals but also tell a captivating story, and I take pride in building engaging digital narratives.
                        <br />
                        <br />
                        So, if you're looking for a frontend developer who is as passionate about crafting captivating user experiences as they are about writing clean, efficient code, you're in the right place. Click "More About Jay" button below to find out more
                    </div>
                    <div className="moreButtonContainer">
                        <Link to="/"><button className="learnMoreButton"><p>More About Jay</p></button></Link>
                    </div>
                </div>
            </div>
            <div className="homeProfile">
                <div className="homeProfileContainer">
                    <div className="homeProfileHeaderContainer">
                        <h4 className="homeProfileHeader">
                            Hi, My Name Is
                        </h4>
                        <h4 className="homeProfileHeader later">
                            Asen Woo Lee
                        </h4>
                    </div>
                    <div className="profileUnderLine" />
                    <div className="profileText">
                        Hey there! I'm Asen Lee, a fullstack engineer with an unwavering passion for bringing digital dreams to life. I specialize in the art of creating dynamic, user-friendly websites and mobile applications using React and React Native.
                        <br />
                        <br />
                        My palette includes HTML, CSS, and JavaScript framework such as React and React Native.I believe that a website should not only meet its functional goals but also tell a captivating story, and I take pride in building engaging digital narratives.
                        <br />
                        <br />
                        So, if you're looking for a frontend developer who is as passionate about crafting captivating user experiences as they are about writing clean, efficient code, you're in the right place. Click "More About Jay" button below to find out more
                    </div>
                    <div className="moreButtonContainer">
                        <Link to="/"><button className="learnMoreButton"><p>More About Asen</p></button></Link>
                    </div>
                </div>
                <img src={asenProfile} alt="Asen's Profile" className="profileImage" />
            </div>
        </div>
    );
};

export default HomeAbout;