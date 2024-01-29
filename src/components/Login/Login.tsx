"use client";
import React, { ChangeEvent, useState } from "react";
import styles from "./Login.module.css";
import logo from "../../../public/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
const Login = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    // Regular expression for a basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(inputEmail);
    setIsValid(isValidEmail);
  };

  return (
    <div className={styles.login}>
      <Link href="/home">  <Image src={logo} alt="" className={styles.image} /></Link>
     
      <div className={styles.form}>
        <div className={styles.title}>Login</div>
        <form action="" className={styles.formcontainer}>
          <input
            type="mail"
            name="mail"
            placeholder="Email address"
            className={`${styles.input} ${styles.first}`}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={styles.input}
          />
        </form>
        <button className={styles.button}>Login to your account</button>
        <div className={styles.donthave}>
          <p className={styles.account}>Don’t have an account?</p>
          <p className={styles.signup}>
            <Link href={"/signup"} className={styles.link}>
              Sign Up
            </Link>
          </p>
        </div>
      </div>
 
    </div>
  );
};

export default Login;
