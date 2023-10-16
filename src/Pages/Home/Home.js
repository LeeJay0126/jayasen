import Menu from "../../SharedComponents/Menu/Menu";
import LatestProject from "./LatestProject";
import './Home.css';

const Home = () => {

    return (
        <div className="HomeBackGround">
            <div className="HomeHeroSection">
                <Menu />
                <div className="HomeHeaders">
                    <h1 className="HomeHeaderStart">
                        <span>J</span>ay <span>. Asen</span>
                    </h1>
                    <h1 className="HomeHeaderContent">Crafting Solutions </h1>
                    <h1 className="HomeHeaderContent">in the Language of Logic</h1>
                </div>
            </div>
            <LatestProject/>
            <div className="RedUnderLine"></div>
        </div>
    );
};

export default Home;