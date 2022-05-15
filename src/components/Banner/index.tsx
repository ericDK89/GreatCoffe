import bannerImg from "../../../public/banner.png";
import "./styles.scss";

export function Banner() {
  return (
    <div className="container">
      <img className="banner" src={bannerImg} alt="banner" />
    </div>
  );
}
