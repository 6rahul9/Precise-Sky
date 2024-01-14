import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h2 className="footer__text">
        Designed and Built by{" "}
        <a href="https://github.com/6rahul9?tab=repositories" target="_blank">
          Rahul Mohuture
        </a>{" "}
        with React, CSS, OpenWeatherAPI and  GeolocationAPI.
      </h2 >
    </div>
  );
};

export default Footer;