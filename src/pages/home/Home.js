import "../../public/styles/output.css";
import Slider from "./components/slider/Slider";
import NavBar from "../../components/navbar/NavBar";
import Contents from "./components/contents/Contents";

import movies from "../../public/data/movies";

const Home = () => {
  return (
    <>
      <NavBar />
      <Slider data={movies} />
      <Contents data={movies} />
    </>
  );
};

export default Home;