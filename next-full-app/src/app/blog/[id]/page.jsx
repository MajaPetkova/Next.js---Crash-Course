import React from 'react'
import styles from "./page.module.css";
import Image from 'next/image';

const BlogPost = ({params}) => {
  return (
    <div className={styles.container}>
    <div className={styles.top}>
      <div className={styles.info}>
        <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
        <p className={styles.desc}>
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum inventore reprehenderit aperiam voluptate. Nostrum eos illo corporis ratione rem dolorum natus pariatur, delectus minus iusto at id voluptas fuga atque ab accusamus.
        </p>
        <div className={styles.author}>
          <Image
            src="https://images.pexels.com/photos/13768940/pexels-photo-13768940.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt=""
            width={40}
            height={40}
            className={styles.avatar}
          />
          <span className={styles.username}>Joe Doe</span>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="https://images.pexels.com/photos/13768940/pexels-photo-13768940.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
          fill={true}
          className={styles.image}
        />
      </div>
    </div>
    <div className={styles.content}>
      <p className={styles.text}>
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto sunt non sequi perspiciatis magnam ipsa? Harum quia porro laborum amet dolorem veritatis cupiditate inventore! Quasi similique eveniet quidem facere exercitationem rem, quam, cum voluptas natus, totam culpa reprehenderit? Quis nihil, voluptatum vero, cupiditate a consectetur nisi porro deleniti qui alias incidunt velit quaerat, facere officiis rem adipisci eum magnam recusandae labore provident deserunt tenetur dolorum minima asperiores. Sit maiores libero soluta necessitatibus blanditiis eius perspiciatis sed illo asperiores minima, molestiae aspernatur, sequi eos atque. Laboriosam.
   <br></br>
   <br></br>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sunt, error beatae excepturi illum rerum? Suscipit eum magnam commodi consequuntur, cum officia corrupti quidem neque quo id beatae tempora quam quia nemo fugiat, magni atque sequi iure. Iste nam sapiente quidem dolore ipsum tempore adipisci et quam, officiis, odit debitis voluptatibus ratione perferendis explicabo aperiam modi voluptas fuga ea! In totam inventore fuga non nisi eaque accusamus. Consectetur, assumenda minima? Delectus labore nisi tempora, ipsa alias accusamus placeat dicta numquam autem, necessitatibus accusantium fugit commodi! Repudiandae, quasi officiis alias veniam eligendi doloremque voluptates sed eaque sunt illum corrupti maxime quod porro eos voluptatibus maiores? Eaque amet dolores, repellat vitae minima soluta.  
     
      </p>
    </div>
  </div>
  )
}

export default BlogPost
