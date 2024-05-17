"use client";

import styles from "@/css/page.module.css";
import { text_generation } from "@/api/text_gen";
import InputPage from "./comps/Input";

export default function Home() {
  // data를 session 이라는 이름으로 쓰겠다.

  const text_gen_test = () => {
    text_generation("");
  };

  return (
    <main className={styles.main}>
      <InputPage />
    </main>
  );
}
