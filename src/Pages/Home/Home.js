import Menu from "../../SharedComponents/Menu/Menu";
import LatestProject from "./LatestProject";
import './Home.css';
import HomeAbout from "./HomeAbout";
import Footer from "../../SharedComponents/Footer/Footer";

const Home = () => {

    return (
        <div className="HomeBackGround">
            <div className="HomeHeroSection">
                <Menu />
                <div className="HomeHeaders">
                    <h1 className="HomeHeaderStart">
                        Jay . Asen
                    </h1>
                    <h1 className="HomeHeaderContent">Crafting Solutions </h1>
                    <h1 className="HomeHeaderContent">in the Language of Logic</h1>
                </div>
            </div>
            <LatestProject/>
            <HomeAbout/>
            <Footer/>
        </div>
    );
};

export default Home;