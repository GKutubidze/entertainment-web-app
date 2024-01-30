"use client"
import React, { useState } from 'react'
import { useBookmarks } from '../(contexts)/BookmarksContext';
import Search from '@/components/Search/Search';
import { Recomended } from '@/components/Recomended/Recomended';
import styles from "./page.module.css"
const BookmarkedPage = () => {
  const [searchValue,setSearchValue]=useState<string>(" ");

  const { bookmarkedMovies, setBookmarkedMovies } = useBookmarks();
  console.log(bookmarkedMovies);
  return (
    <div className={styles.main}>
      <Search setSearchValue={setSearchValue}/>
      <Recomended movieData={bookmarkedMovies} searchValue={searchValue} title="Bookmarked Movies"
      bookmarkedMovies={bookmarkedMovies}
      setBookmarkedMovies={setBookmarkedMovies}
      />
    </div>
  )
}

export default BookmarkedPage