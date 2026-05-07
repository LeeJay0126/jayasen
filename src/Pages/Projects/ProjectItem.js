const ProjectItem = ({ project, variant = "default" }) => {
    const {
        image,
        alt,
        title,
        category,
        role,
        summary,
        technologies,
        highlights,
        metrics,
        links,
        accent,
        mark,
    } = project;
    const isQaProject = category === "QA Automation Project";
    const visibleHighlights = variant === "compact" ? highlights.slice(0, 2) : highlights;

    const technologyTags = technologies.map((item) =>
        <li className="projectLanguageCircle" key={item}>
            {item}
        </li>
    );

    const projectHighlights = visibleHighlights.map((item) =>
        <li className="projectHighlight" key={item}>
            {item}
        </li>
    );

    const projectMetrics = metrics.map((item) =>
        <li className="projectMetric" key={item}>
            {item}
        </li>
    );

    const projectLinks = links.length > 0
        ? links.map((link) => (
            <a className="projectLink" href={link.url} target="_blank" rel="noreferrer" key={link.label}>
                {link.label}
            </a>
        ))
        : (
            <span className="projectLink projectLinkDisabled">
                Case Study Coming Soon
            </span>
        );

    const cardClassName = `ProjectItemCard ProjectItemCard-${accent || "default"} ${variant === "compact" ? "ProjectItemCardCompact" : ""}`;

    return (
        <article className={cardClassName}>
            <div className="projectVisual">
                {image ? (
                    <img src={require("../../SharedComponents/Imgs/Logos/" + image)}
                        alt={alt}
                        className="PICHero"
                    />
                ) : (
                    <div className="projectTextMark" aria-label={`${title} project mark`}>
                        {mark}
                    </div>
                )}
            </div>
            <div className="projectCardContent">
                <p className={isQaProject ? "projectCategory projectCategoryQa" : "projectCategory"}>
                    {category}
                </p>
                <h3 className="projectTitle">
                    {title}
                </h3>
                <p className="projectRole">{role}</p>
                <p className="projectSummary">{summary}</p>
                <ul className="projectMetrics">
                    {projectMetrics}
                </ul>
                <ul className="projectCircleContainer">
                    {technologyTags}
                </ul>
                <ul className="projectHighlights">
                    {projectHighlights}
                </ul>
            </div>
            <div className="projectAction">
                {projectLinks}
            </div>
        </article>
    );
};

export default ProjectItem;
