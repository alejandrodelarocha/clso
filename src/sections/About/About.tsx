import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import "./About.css";

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-5">
      <div className="container">
        {/* Section Title */}
        <div className="section-title text-center mb-5">
          <h2 className="display-5 fw-bold">{t("about_title")}</h2>
          <div className="divider">
            <span className="line"></span>
            <span className="icon">
              <i className="fas fa-bolt"></i>
            </span>
            <span className="line"></span>
          </div>
        </div>

        <div className="row align-items-center">
          {/* Left image */}
          <div className="col-lg-6 mb-4 mb-lg-0 d-flex justify-content-center">
            <div className="about-image-wrapper">
              <img
                src="assets/electricos.jpeg"
                alt={t("about_image_alt")}
                className="img-fluid rounded-3 shadow main-about-image"
              />

              {/* Experience badge */}
              <div className="experience-badge">
                <div className="years">15+</div>
                <div className="text">{t("about_years_experience")}</div>
              </div>
            </div>
          </div>

          {/* Right text content */}
          <div className="col-lg-6">
            <h3 className="h4 mb-4">{t("about_subtitle")}</h3>
            <p className="mb-4">{t("about_description_1")}</p>

            {/* 3D Spinner inserted between paragraphs */}
            <div className="spinner3d-container my-4">
              <div className="logo3d">
                <div className="arc arc-outer"></div>
                <div className="arc arc-yellow"></div>
                <div className="arc arc-teal"></div>
                <div className="center-circle"></div>
              </div>
            </div>

            <p className="mb-4">{t("about_description_2")}</p>

           {/* Features grid */}
<div className="row mt-4">
  {[
    { title: "about_feature_1_title", desc: "about_feature_1_desc" },
    { title: "about_feature_2_title", desc: "about_feature_2_desc" },
    { title: "about_feature_3_title", desc: "about_feature_3_desc" },
    { title: "about_feature_4_title", desc: "about_feature_4_desc" },
  ].map((f, i) => (
    <div className="col-6 col-lg-3 mb-4" key={i}>
      <div className="d-flex align-items-start gap-2">
        <i className="fas fa-check-circle text-success mt-1"></i>
        <div>
          <h5 className="h6 mb-1">{t(f.title)}</h5>
          <p className="small text-muted mb-0">{t(f.desc)}</p>
        </div>
      </div>
    </div>
  ))}
</div>


            {/* CTA Buttons */}
<div className="mt-4 flex gap-4">
  <a href="#contact" className="btn btn-primary">
    {t("about_cta_contact")}
  </a>
  <a href="#portfolio" className="btn btn-outline-primary">
    {t("about_cta_portfolio")}
  </a>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
