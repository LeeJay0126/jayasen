import "./Project.css";
import Menu from "../../SharedComponents/Menu/Menu";
import Footer from "../../SharedComponents/Footer/Footer";
import { VscTools } from "react-icons/vsc";

const Project = () => {

    return (
        <div className="ProjectPage">
            <Menu />
            <main className="ProjectsMain">
                <section className="tempUnavail">
                    <VscTools className="tempImg"/>
                    <h1 className="ProjectsTempHeading">
                        COMING SOON
                    </h1>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Project;