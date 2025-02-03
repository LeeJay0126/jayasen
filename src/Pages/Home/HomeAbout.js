import jayProfile from "../../SharedComponents/Imgs/SoloImages/Jay/프로필사진.jpg";
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
                        As a Fullstack Developer, I have hands-on experience in building responsive and high-performance web applications.
                        <br />
                        <br />
                        Currently, I work as a Medical Interpreter at LLS Interpreter, where I bridge communication gaps in critical healthcare settings between Korean and English speakers, facilitating accurate diagnosis and treatment.
                        <br />
                        <br />
                        In my previous role at WBH Construction, I contributed to the development of the company’s website, utilizing React.js, PostgreSQL, and Node.js to optimize user experience, traffic, and customer engagement.
                        <br />
                        <br />
                        Additionally, at Midam Cafe, I developed a dynamic restaurant website using React.js, managed over 50,000 requests through AWS services, and implemented a QR code-based menu system for enhanced customer convenience.
                        <br />
                        <br />
                        My technical expertise spans both frontend and backend development, enabling me to create efficient and scalable solutions.
                    </div>
                    <div className="moreButtonContainer">
                        <Link to="/about"><button className="learnMoreButton"><p>More About Jay</p></button></Link>
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
                            Jay Seung Yeon Lee
                        </h4>
                    </div>
                    <div className="profileUnderLine" />
                    <div className="profileText">
                        In addition to my technical background, I have a strong foundation in customer-facing roles.
                        <br />
                        <br />
                        As a waiter at Midam Cafe, I honed my problem-solving and communication skills by managing customer expectations and ensuring smooth service during peak hours.
                        <br />
                        <br />
                        My experience as an English Instructor at Hongong University further strengthened my ability to communicate complex information clearly and foster positive interactions with diverse groups.
                        <br />
                        <br />
                        These roles have refined my ability to work in fast-paced environments, ensuring both technical precision and customer satisfaction.
                    </div>
                    <div className="moreButtonContainer">
                        <Link to="/about"><button className="learnMoreButton"><p>More About Jay</p></button></Link>
                    </div>
                </div>
                <img src={asenProfile} alt="Asen's Profile" className="profileImage" />
            </div>
        </div>
    );
};

export default HomeAbout;