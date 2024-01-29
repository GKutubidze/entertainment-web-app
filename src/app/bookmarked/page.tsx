"use client"
import React, { useState } from 'react'
import { useBookmarks } from '../(contexts)/BookmarksContext';
import Search from '@/components/Search/Search';
import { Recomended } from '@/components/Recomended/Recomended';

const BookmarkedPage = () => {
  const [searchValue,setSearchValue]=useState<string>(" ");

  const { bookmarkedMovies, setBookmarkedMovies } = useBookmarks();
  console.log(bookmarkedMovies);
  return (
    <div>
      <Search setSearchValue={setSearchValue}/>
      <Recomended movieData={bookmarkedMovies} searchValue={searchValue} title="Bookmarked Movies"
      bookmarkedMovies={bookmarkedMovies}
      setBookmarkedMovies={setBookmarkedMovies}
      />
    </div>
  )
}

export default BookmarkedPage