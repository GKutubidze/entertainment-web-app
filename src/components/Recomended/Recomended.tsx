import React from "react";
import styles from "./Recomended.module.css";
import { MovieComponentProps } from "@/Types/Types";
import MainMovie from "../MovieComponent/MainMovie/MainMovie";

export const Recomended: React.FC<{
  movieData: MovieComponentProps[];
  searchValue: string;
  title: string;
  bookmarkedMovies: MovieComponentProps[];
  setBookmarkedMovies: React.Dispatch<
    React.SetStateAction<MovieComponentProps[]>
  >;
}> = ({
  movieData,
  searchValue,
  title,
  bookmarkedMovies,
  setBookmarkedMovies,
}) => {
  const filteredData =
    searchValue.trim() === ""
      ? movieData
      : movieData.filter((item) =>
          item.title.toLowerCase().startsWith(searchValue.toLowerCase())
        );

  const handleBookmark = (movie: MovieComponentProps) => {
    // Check if the movie is already bookmarked
    const isBookmarked = bookmarkedMovies.some((m) => m.title === movie.title);

    if (isBookmarked) {
      // If already bookmarked, remove it from the array
      setBookmarkedMovies((prevMovies) =>
        prevMovies.filter((m) => m.title !== movie.title)
      );
    } else {
      // If not bookmarked, add it to the array
      setBookmarkedMovies((prevMovies) => [...prevMovies, movie]);
    }
  };

  return (
    <div className={styles.recomended}>
      <div className={styles.header}>
        <p>{title}</p>
      </div>
      <div className={styles.movieContainer}>
        {filteredData.map((item, key) => {
          const {
            title,
            thumbnail,
            year,
            category,
            rating,
            isBookmarked,
            isTrending,
          } = item;

          return (
            <MainMovie
              title={title}
              thumbnail={thumbnail}
              year={year}
              category={category}
              rating={rating}
              isBookmarked={isBookmarked}
              isTrending={isTrending}
              key={key}
              onBookmark={handleBookmark}
            />
          );
        })}
      </div>
    </div>
  );
};
