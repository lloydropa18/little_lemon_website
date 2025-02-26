import marioPicA from "../images/Mario_and_AdriaA.jpg";
import marioPicB from "../images/Mario_and_AdriaB.jpg";
const About = () => {
  return (
    <section className="about_section" id="about">
      <div className="about_details">
        <h1 className="website_heading">Little Lemon</h1>
        <h2 className="website_subheading">Chicago</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
          molestias, cum saepe unde amet pariatur error possimus maiores omnis
          fugiat officiis rem non dolorum dicta vero ullam quibusdam fuga
          repellat hic est vel odit animi. Quibusdam laborum minima voluptate
          pariatur?
        </p>
      </div>

      <div className="about_images">
        <div className="about_image1">
          <img src={marioPicA} alt="" />
        </div>
        <div className="about_image2">
          <img src={marioPicB} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
