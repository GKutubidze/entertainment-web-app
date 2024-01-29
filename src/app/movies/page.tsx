"use client"
import Search from '@/components/Search/Search'
import movieData from "../../../public/data.json"
import { Recomended } from '@/components/Recomended/Recomended'
import { useState } from 'react'
import { MovieComponentProps } from '@/Types/Types'
import { useBookmarks } from '../(contexts)/BookmarksContext'

const MoviesPage = () => {

  const [searchValue,setSearchValue]=useState<string>(" ");
  // const [bookmarkedMovies, setBookmarkedMovies] = useState<MovieComponentProps[]>([]);
  const { bookmarkedMovies, setBookmarkedMovies } = useBookmarks();

  console.log(bookmarkedMovies);
  return (
    <div>
      <Search setSearchValue={setSearchValue}/>
      <Recomended movieData={movieData} searchValue={searchValue} title="Movies"
      bookmarkedMovies={bookmarkedMovies}
      setBookmarkedMovies={setBookmarkedMovies}
      />

    </div>
  )
}

export default MoviesPage