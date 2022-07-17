import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.css";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperty from "../../components/featuredProperties/FeaturedProperties";
import MailList from "../../components/mailList/MailList";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Utforska olika typer av boenden</h1>
        <PropertyList />
        <h1 className="homeTitle">Hus och hem som gästerna älskar</h1>
        <FeaturedProperty />
        <MailList />
      </div>
    </div>
  );
};

export default Home;
