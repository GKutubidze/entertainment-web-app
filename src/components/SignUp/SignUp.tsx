import React from 'react'
import styles from "./SignUp.module.css"
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/logo.svg";

const SignUp = () => {
  return (
    <div className={styles.Signup}>
      <Link href="/signup">  <Image src={logo} alt="" className={styles.image} /></Link>
      <div className={styles.form}>
        <div className={styles.title}>Sign Up</div>
        <form action="" className={styles.formcontainer}>
          <input
            type="mail"
            name="mail"
            placeholder="Email address"
            className={`${styles.input} ${styles.first}`}
           />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={`${styles.input} ${styles.first}`}
          />
          <input
            type="password"
            name="password"
            placeholder="Repeat Password"
            className={styles.input}
          />
        </form>
        <button className={styles.button}>Create an account</button>
        <div className={styles.donthave}>
          <p className={styles.account}>Alread have an account?</p>
          <p className={styles.login}>
            <Link href={"/login"} className={styles.link}>
              Login
            </Link>
          </p>
        </div>
      </div>
 
    </div>
  )
}

export default SignUp