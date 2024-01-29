"use client";
import React, { useState } from "react";
import movieData from "../../../public/data.json";
import { Recomended } from "@/components/Recomended/Recomended";
import Search from "@/components/Search/Search";
import { useBookmarks } from "../(contexts)/BookmarksContext";

const TvSeriesPage = () => {
  const [searchValue, setSearchValue] = useState<string>(" ");
  const { bookmarkedMovies, setBookmarkedMovies } = useBookmarks();

  const Data = movieData.filter((item) => item.category === "TV Series");

  return (
    <div>
      <Search setSearchValue={setSearchValue} />
      <Recomended
        movieData={Data}
        searchValue={searchValue}
        title="TV series"
        bookmarkedMovies={bookmarkedMovies}
        setBookmarkedMovies={setBookmarkedMovies}
      />
    </div>
  );
};

export default TvSeriesPage;
