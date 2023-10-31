import React from "react";
import styles from "./page.module.css";
import Button from "../../../components/button/Button";
import Image from "next/image";

const Category = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Creative Portfolio</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus laudantium odio ipsam rem, officia et fugit nesciunt vero. Eaque reiciendis id inventore non obcaecati ab autem cupiditate ad itaque corrupti!</p>
          <Button text="See more" url="#"/>
        </div>
        <div className={styles.imageContainer}>
          <Image className={styles.img} fill={true} src="https://images.pexels.com/photos/776469/pexels-photo-776469.jpeg?auto=compress&cs=tinysrgb&w=400" alt="img"/>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Creative Portfolio</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus laudantium odio ipsam rem, officia et fugit nesciunt vero. Eaque reiciendis id inventore non obcaecati ab autem cupiditate ad itaque corrupti!</p>
          <Button text="See more" url="#"/>
        </div>
        <div className={styles.imageContainer}>
          <Image className={styles.img} fill={true} src="https://images.pexels.com/photos/6073142/pexels-photo-6073142.jpeg?auto=compress&cs=tinysrgb&w=400" alt="img"/>
        </div>
      </div>
    </div>
  );
};

export default Category;
