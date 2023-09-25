import React from "react";
import css from "./navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className={css.navbar}>
      <p>Dashboard</p>
      <div className={css.logo}>
        <Image
          className={css.img}
          src={"/assets/img/profile1.png"}
          width={65}
          height={65}
          alt="img"
        />
        <Image
          className={css.img}
          src={"/assets/img/arrow-down.png"}
          width={25}
          height={15}
          alt="img"
        />
      </div>
    </div>
  );
}
