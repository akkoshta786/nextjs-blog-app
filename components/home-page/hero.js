import classes from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/atul-koshta.JPG"
          alt="Atul Koshta"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I am Atul</h1>
      <p>
        I love to learn and share knowledge about MERN stack and highly
        interested in backend technologies.
      </p>
    </section>
  );
};

export default Hero;
