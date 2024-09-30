import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey,Atharva dev here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/hero.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            BlogOn - Your Creative Storytelling Partner

          </h1>
          <p className={styles.postDesc}>
            BlogOn is a dynamic and user-friendly blogging platform designed to
            foster creativity and self-expression. It provides a seamless
            experience for both bloggers and readers. With its clean and modern
            design, BlogOn allows users to easily create, share, and discover
            engaging content on a wide range of topics. Integrated with advanced
            features like real-time post updates and secure authentication
            through NextAuth, BlogOn ensures a smooth, personalized, and
            interactive blogging journey for all its users. Whether you are a
            seasoned writer or a first-time blogger, BlogOn is the perfect
            platform to share your voice with the world.
          </p>
          {/* <button className={styles.button}>Read More</button> */}
        </div>
      </div>
    </div>
  );
};

export default Featured;
