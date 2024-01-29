"use client";
import Search from "@/components/Search/Search";
import { Trending } from "@/components/Trending/Trending";
import React, { useState } from "react";
import style from "./page.module.css";
import movieData from "../../../public/data.json";
import { Recomended } from "@/components/Recomended/Recomended";
import { useBookmarks } from "../(contexts)/BookmarksContext";
 

const HomePage = () => {
  const [searchValue, setSearchValue] = useState<string>(" ");
  const { bookmarkedMovies, setBookmarkedMovies } = useBookmarks();

   return (
    <div className={style.homePage}>
      <Search setSearchValue={setSearchValue} />
      <Trending movieData={movieData} />
      <Recomended
        movieData={movieData}
        searchValue={searchValue}
        title="Recommended for you"
        bookmarkedMovies={bookmarkedMovies}
        setBookmarkedMovies={setBookmarkedMovies}
     
      />
    </div>
  );
};

 
export default HomePage;