import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {cache:"no-store"});
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.map(x => (<Link href="/blog/testId" className={styles.container} key={x.id}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/2295744/pexels-photo-2295744.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
            width={300}
            height={250}
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>{x.title}</h1>
          <p className={styles.desc}>{x.body}</p>
        </div>
      </Link>))}
         </div>
  );
};

export default Blog;
