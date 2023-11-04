import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "../../components/button/Button";


export const metadata = {
  title: "About Page",
  description: "About Page",
};
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3277808/pexels-photo-3277808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt="img"
          className={styles.image}
        />
        <div className={styles.text}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            nisi eos et qui nihil, architecto repudiandae odit consequatur
            veritatis alias accusantium ab ex velit reprehenderit impedit
            numquam corporis quo doloremque quaerat dolor? Consectetur impedit
            quas necessitatibus amet, nemo ipsam, beatae est explicabo quam
            possimus doloremque. Exercitationem culpa dolor iste fugiat corrupti
            perspiciatis, placeat, mollitia saepe earum accusamus rerum natus
            quisquam, eos laboriosam! Quo eius pariatur sapiente eaque corrupti
            maiores alias amet commodi tempora velit, eos nemo perferendis
            minima delectus? Vitae placeat consequuntur quidem facilis illum,
            perspiciatis incidunt praesentium vel aliquam repellat tempora harum
            in ullam, sint vero? Eius alias, nisi quis molestias minima dolorum
            in, corrupti, est ullam quas impedit!
            <br />
            <br /> Tenetur perferendis commodi a aliquid, sed delectus assumenda
            non minus numquam quibusdam dicta earum, amet asperiores mollitia
            quia! Obcaecati ab totam dolorum molestiae nam fugit dolore eum!
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            dolores tempore modi exercitationem corporis obcaecati quod odit
            perferendis blanditiis doloribus suscipit cupiditate numquam, neque
            nisi aliquam nemo ut a enim! Reprehenderit incidunt, numquam
            reiciendis nostrum, quis magnam ea ullam voluptate minima quo
            similique. Eius laboriosam eligendi iusto labore placeat aliquid id
            aspernatur quo dolorem ratione accusantium tempore commodi minima
            delectus optio quis vitae, enim quas repellat recusandae itaque
            ducimus eveniet voluptas.
            <br />
            <br />
            - Dynamic Websites
            <br />
            <br/>
            - Creativ Ilustrations
            <br/>
            <br/>
            - Fast and Handy Mobiles App
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
