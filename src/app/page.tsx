
import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header/header";
import ListItemBody from "@/components/listitembody/listitembody";
import { useState } from "react";

const data = ['Component 1.svg', 'user.svg']
export default function Home() {
  return (
    <main>
      {
        <>
        <Header/>
        <ListItemBody/>
        </>
      }
    </main>
  );
}
