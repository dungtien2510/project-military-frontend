import Content from "./Content";
import Footer from "./Footer";
import style from "./IntroducePage.module.css";
function IntroducePage() {
  return (
    <div className={style.intro}>
      <div className={style.introContent}>
        <img src="./images/person.jpg" />
        <Content />
      </div>
      <Footer />
    </div>
  );
}
export default IntroducePage;
