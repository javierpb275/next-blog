import classes from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/image-profile.png"
          alt="my image profile"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Javier</h1>
      <p>I am a Web Developer</p>
    </section>
  );
};

export default Hero;
