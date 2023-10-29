import React from "react"
import styles from './page.module.css'
import Image from "next/image"
import Hero from "public/hero.png"
import Button from "../components/button/Button";

export default function Home() {
  return (
   <div className={styles.container} >
    <div className={styles.item}>
      <h1 className={styles.title}>Better design for your digital products</h1>
      <p className={styles.description}>Turning your idea into reality. We bring together the teams from the global tech industry.</p>
      <Button url="/portfolio" text="See Our Works" />
    </div>
    <div className={styles.item}>
    <Image src={Hero} alt="home img" className={styles.img}/>
    </div>
   </div>
  )
}
