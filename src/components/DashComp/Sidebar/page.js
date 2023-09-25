import React from "react";
import css from "./sidebar.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className={css.sidebar}>
      <div className={css.top}>
        <Image
          className={css.img}
          src={"/assets/img/side-icon1.png"}
          width={23}
          height={23}
          alt="img"
        />
        <Image
          className={css.img}
          src={"/assets/img/side-icon2.png"}
          width={23}
          height={23}
          alt="img"
        />
        <Image
          className={css.img}
          src={"/assets/img/side-icon3.png"}
          width={23}
          height={23}
          alt="img"
        />
      </div>
      <div className={css.bottom}>
        <Link href={"/"}>
          <Image
            className={css.img}
            src={"/assets/img/side-icon4.png"}
            width={31}
            height={37}
            alt="img"
          />
        </Link>
      </div>
    </div>
  );
}
