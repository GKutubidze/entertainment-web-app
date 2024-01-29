"use client";
import React, { useRef, useState } from "react";
import styles from "./Trending.module.css";
import useDraggableScroll from "@/utils/useDraggableScroll";
import { MovieComponentProps } from "@/Types/Types";
import { MovieComponent } from "../MovieComponent/MovieComponent";
export const Trending: React.FC<{ movieData: MovieComponentProps[] }> = ({
  movieData,
}) => {
  const { containerRef, handleMouseDown } = useDraggableScroll();
  const Data = movieData.filter(
    (item) => item.thumbnail && item.thumbnail.trending
  );
  const [bookmarkedMovies, setBookmarkedMovies] = useState<
    MovieComponentProps[]
  >([]);
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
    <div
      className={styles.trending}
      ref={containerRef}
      onMouseDown={handleMouseDown}
    >
      <div className={styles.header}>
        <p>Trending</p>
      </div>
      <div className={styles.movieComps}>
        {Data.map((item, key) => {
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
            <MovieComponent
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
