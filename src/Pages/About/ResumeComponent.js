
const ResumeComponent = (props) => {

    const jobDesc = props.jobDescription.map((desc) => (
        <li className="jobDesc" key={desc}>
            {desc}
        </li>
    ));

    return (
        <li>
        <section className="ResumeList">
            <div className="ResumeListLeft">
                <h3 className="ResumeListHeading">
                    {props.company}
                </h3>
                <h4>
                    {props.title}
                </h4>
                <h4>
                    {props.type}
                </h4>
            </div>
            <div className="ResumeListRight">
                <h4>
                    {props.startDate} ~ {props.endDate}
                </h4>
            </div>
        </section>
        <section className="workDescription">
            <ul>
                {jobDesc}
            </ul>
        </section>
        </li>
    );
}

export default ResumeComponent;