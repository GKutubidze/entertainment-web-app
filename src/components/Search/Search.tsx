'use client'
import React, { useState } from "react";
import styles from "./Search.module.css";
import searchIcon from "../../../public/assets/icon-search.svg";
import Image from "next/image";
export const Search = (props:{setSearchValue: React.Dispatch<React.SetStateAction<string>>}) => {
   

  return (
    <div className={styles.search}>
      <Image src={searchIcon} alt="" width={24} height={24} className={styles.searchImage} />
      <input
        type="text"
        name="search"
        placeholder="Search for movies or TV series"
        className={styles.input}
        onChange={(e)=>{
          props.setSearchValue(e.target.value);
        }}
      />
    </div>
  );
};

export default Search;
