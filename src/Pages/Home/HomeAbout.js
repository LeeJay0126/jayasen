import jayProfile from "../../SharedComponents/Imgs/SoloImages/Jay/프로필사진.jpg";
import { Link } from "react-router-dom";

const HomeAbout = () => {
    const qaHighlights = [
        ["Automation", "Playwright API coverage for auth, CRUD, cleanup, and reports."],
        ["Test Design", "300+ manual, API, database, security, and regression cases."],
        ["Quality Mindset", "Clear defects, risk-focused validation, and release confidence."],
    ];

    return (
        <div className="HomeAboutContainer">
            <div className="LatestProjectContainer">
                <h2 className="HomeProjectHeader">ABOUT</h2>
                <h2 className="HomeProjectHeader later">Jay Lee</h2>
            </div>
            <div className="RedUnderLine" />
            <div className="homeProfile">
                <figure className="profileImageFrame">
                    <img src={jayProfile} alt="Jay Lee's profile" className="profileImage" />
                </figure>
                <div className="homeProfileContainer">
                    <p className="homeProfileEyebrow">QA Automation / Jr. SDET</p>
                    <div className="homeProfileHeaderContainer">
                        <h4 className="homeProfileHeader">
                            Jay Seung Yeon Lee
                        </h4>
                    </div>
                    <div className="profileUnderLine" />
                    <p className="profileLead">
                        I design practical automation and test coverage for full-stack applications, with a focus on API behavior, data integrity, regression risk, and clear defect evidence.
                    </p>
                    <div className="qaHighlightGrid">
                        {qaHighlights.map(([title, description]) => (
                            <article className="qaHighlightCard" key={title}>
                                <h5>{title}</h5>
                                <p>{description}</p>
                            </article>
                        ))}
                    </div>
                    <div className="profileText">
                        <p>
                            My current focus is VerseByVerse, where I am building Playwright automation for a production React, Node.js, Express, and MongoDB application. The suite covers authenticated API testing, CRUD validation, negative-path checks, test data cleanup, preflight checks, and CI-ready HTML, JSON, and JUnit reporting.
                        </p>
                        <p>
                            I also bring frontend development experience from React projects at WBH Construction and Midam Cafe, which helps me test with a developer's understanding of UI behavior, APIs, data flows, and production risk.
                        </p>
                    </div>
                    <div className="moreButtonContainer">
                        <Link to="/about"><button className="learnMoreButton"><p>View Resume</p></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;
