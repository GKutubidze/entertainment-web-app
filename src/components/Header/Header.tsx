'use client'
import React, { useState } from "react";
import styles from "./Header.module.css";
import logo from "../../../public/assets/logo.svg";
import home from "../../../public/assets/icon-nav-home.svg";
import movies from "../../../public/assets/icon-nav-movies.svg";
import tv from "../../../public/assets/icon-nav-tv-series.svg";
import bookmark from "../../../public/assets/icon-nav-bookmark.svg";
import avatar from "./../../../public/assets/blank-user-svgrepo-com.svg"
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
 
const Paths=["/home","/tvseries","/movies","/bookmarked"]
const Header = () => {
  const [authVisible, setAuthVisible] = useState(false);
  const toggleAuth = () => {
    setAuthVisible(!authVisible);
  };
  const pathname=usePathname();
  const shouldRenderHeader = Paths.includes(pathname);
  if(!shouldRenderHeader){
    return null;
  }
  return (
    <div className={styles.header}>
      <Link  href="/home">
      <Image
        src={logo}
        alt=""
        className={styles.movieImage}
        width={25}
        height={20}
      />
</Link>
      <div className={styles.menu}>
        <Link href="./home">
          <Image
            src={home}
            alt=""
            width={16}
            height={16}
            className={styles.menuImage}
          />
        </Link>
        <Link href="./movies">
          <Image
            src={movies}
            alt=""
            width={16}
            height={16}
            className={styles.menuImage}
          />
        </Link>

        <Link href="./tvseries">
          <Image
            src={tv}
            alt=""
            width={16}
            height={16}
            className={styles.menuImage}
          />
        </Link>
        <Link href="./bookmarked">
          <Image
            src={bookmark}
            alt=""
            width={13}
            height={16}
            className={styles.menuImage}
          />
        </Link>
      </div>
      <div style={{ position: 'relative' }}>
      <Image
        src={avatar}
        alt=""
        width={24}
        height={24}
        className={styles.avatarImage}

        onClick={toggleAuth}

      />
          {authVisible && (
        <div className={styles.auth}  >
          <Link href="/login"  className={styles.link}>
          <button className={styles.login}>Login</button>

          </Link>
          <Link href="/signup" className={styles.link} >
          <button className={styles.signup}>Signup</button>

          </Link>
        </div>
      )}
      </div>
    </div>
  );
};

export default Header;
