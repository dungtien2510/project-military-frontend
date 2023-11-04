import Content from "./content/Content";
import style from "./HomePage.module.css";
function HomePage() {
  return (
    <div className={style.home}>
      <div className={style.homeHeader}>
        <img src="./images/su22.jpg" />
        <Content />
      </div>
    </div>
  );
}
export default HomePage;
