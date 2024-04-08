import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/roget-concept-logo-white.JPG"
          alt="Roget Concept Logo"
          width={250}
          height={250}
          priority
        />
      </div>
      Under construction
      <br />
      Contact: francois (a) roget-concept.be
    </main>
  );
}
