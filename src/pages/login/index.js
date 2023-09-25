import React from "react";
import Image from "next/image";
import css from "./login.module.css";
import Link from "next/link";


export default function Login() {
  return (
    <div className={css.MainContainer}>
      <div className={css.leftContainer}>
        <div className={css.cicle}></div>
        <div className={css.text}>
          <div className={css.title}>
            {/* <Image src={"/smarthome.png"} width={72} height={72} alt="img" /> */}
            <img src="/assets/img/smarthome.png" width={72} height={72} alt="img" />
            <p>MushRoom</p>
          </div>
          <p>Welcome To MushRoom Smart Home!</p>
        </div>
      </div>
      {/*  */}
      <div className={css.rightContainer}>
        <form>
          <div className={css.title}>
            <h1>Welcome Back !</h1>
            <p>Please sign in to continue</p>
          </div>
          <div className={css.input}>
            <label>Usename / Email</label>
            <Image
              src={"/assets/img/input-icon.png"}
              width={21}
              height={23}
              alt="img"
              style={{ position: "absolute", left: "30px" }}
            />
            <input
              type="teks"
              name=""
              placeholder="Enter your username or email"
            ></input>
          </div>
          <div className={css.input}>
            <label>Password</label>
            <Image
              src={"/assets/img/input-icon2.png"}
              width={21}
              height={23}
              alt="img"
              style={{ position: "absolute", left: "30px" }}
            />
            <input
              type="password"
              name=""
              placeholder="Enter your password"
            ></input>
          </div>
            <button >Login</button>
        </form>
      </div>
    </div>
  );
}
