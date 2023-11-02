import React from "react";
import styles from "./page.module.css";
import Button from "../../../components/button/Button";
import Image from "next/image";
import {items} from "./data.js"
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];

  if(data){
    return data
  }
  return notFound()
};
const Category = ({ params }) => {
const data= getData(params.category)

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
{data.map((x)=>(

      <div className={styles.item} key={x.id}>
        <div className={styles.content}>
          <h1 className={styles.title}>{x.title}</h1>
          <p className={styles.desc}>
           {x.desc}
          </p>
          <Button text="See more" url="#" />
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.img}
            fill={true}
            src={x.image}
            alt="img"
          />
        </div>
      </div>
))}

    </div>
  );
};

export default Category;
