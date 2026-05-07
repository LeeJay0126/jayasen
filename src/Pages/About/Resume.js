import ResumeComponent from "../About/ResumeComponent";
import JayProfessional from "./Jay/JayProfessional";
import JayPicture from "../../SharedComponents/Imgs/SoloImages/Jay/프로필사진.jpg"

const skillGroups = [
    ["Test Automation", "Playwright, TestCafe, Selenium fundamentals, smoke testing, regression testing"],
    ["QA Practices", "API testing, test case design, bug reporting, test plans, defect isolation, database validation, JSON/JUnit reporting"],
    ["CI/CD", "GitHub Actions fundamentals, CI-ready test reporting, Playwright HTML/JSON/JUnit artifacts"],
    ["Languages", "JavaScript, Java, Python, C#, SQL"],
    ["Databases", "MongoDB, PostgreSQL, MySQL, MS SQL"],
    ["Frontend / Backend", "React, HTML/CSS, Node.js, Express, REST APIs"],
    ["Tools", "Git, GitHub, Bitbucket, Jira, TestRail, Postman, AWS S3, Route 53"],
];

const verseByVerseHighlights = [
    "Built and tested a deployed full-stack Bible study platform using React, Node.js, Express, and MongoDB, with authentication, notes, communities, posts, replies, polls, and notifications.",
    "Designed 300+ manual, API, database, security, and regression test cases across authentication, Bible reading, notes, community workflows, notifications, and data integrity scenarios.",
    "Developed Playwright API automation covering authentication, notes CRUD, community creation, post creation, validation, filtering, search, and unauthenticated access.",
    "Implemented reusable session helpers, test data cleanup, preflight checks, and Playwright HTML/JSON/JUnit reporting, preparing the suite for CI/CD execution through GitHub Actions.",
    "Documented reproducible defects and validation evidence for authentication, community permissions, notifications, layout behavior, and notes workflows.",
];

const Resume = () => {
    const experienceList = JayProfessional.map((jobs) =>
        (<ResumeComponent
            company={jobs[0]}
            title={jobs[1]}
            startDate={jobs[2]}
            endDate={jobs[3]}
            type={jobs[4]}
            jobDescription={jobs[5]}
            key={`${jobs[0]}-${jobs[2]}`}
        />
        ));

    const skills = skillGroups.map(([category, items]) => (
        <li className="resumeSkillCard" key={category}>
            <h3>{category}</h3>
            <p>{items}</p>
        </li>
    ));

    const projectHighlights = verseByVerseHighlights.map((highlight) => (
        <li className="jobDesc" key={highlight}>
            {highlight}
        </li>
    ));

    return (
        <section className="resumeContainer">
            <section className="resumeHero">
                <img src={JayPicture} alt="Jay Seung Yeon Lee" className="resumeImage" />
                <aside className="resumeHeroContent">
                    <p className="resumeEyebrow">
                        QA Automation / Jr. SDET
                    </p>
                    <h2 className="resumeHeroHeading">
                        Jay Seung Yeon Lee
                    </h2>
                    <p className="resumeContactLine">
                        jay.asen.lee@gmail.com | linkedin.com/in/jay-lee-b3b46a221/ | github.com/LeeJay0126 | www.jayasen.com
                    </p>
                    <p className="resumeSummary">
                        QA Automation / Jr. SDET candidate with hands-on experience in manual test design, API testing, database validation, defect isolation, and sprint QA reporting. Currently building Playwright automation for a production full-stack React, Node.js, Express, and MongoDB application, including authenticated API testing, CRUD validation, test data cleanup, preflight checks, CI-ready reporting, and HTML/JSON/JUnit artifacts.
                    </p>
                </aside>
            </section>

            <section className="resumeSection">
                <h2 className="resumeHeading">Technical Skills</h2>
                <ul className="resumeSkillGrid">
                    {skills}
                </ul>
            </section>

            <section className="resumeSection resumeProject">
                <div className="resumeProjectHeader">
                    <div>
                        <h2 className="resumeHeading">Featured QA Project</h2>
                        <h3>VerseByVerse</h3>
                    </div>
                    <p>Production Full-Stack QA Automation Project | January 2025 - Present</p>
                </div>
                <ul className="workDescription">
                    {projectHighlights}
                </ul>
            </section>

            <section className="resumeSection">
                <h2 className="resumeHeading">Experience</h2>
                <ul className="ResumeListContainer">
                    {experienceList}
                </ul>
            </section>

            <section className="resumeSection">
                <h2 className="resumeHeading">Education</h2>
                <div className="resumeEducationGrid">
                    <article>
                        <h3>Langara College</h3>
                        <p>Associate's Degree in Computer Science</p>
                        <span>January 2020 - December 2023 | Vancouver, BC</span>
                    </article>
                    <article>
                        <h3>Simon Fraser University</h3>
                        <p>Bachelor of Arts in Criminology</p>
                        <span>September 2017 - September 2019 | Vancouver, BC</span>
                    </article>
                </div>
            </section>
        </section>
    );
}

export default Resume;
