"use client";
import React, { useState } from "react";
import styles from "./MainMovie.module.css";
import { MovieComponentProps } from "@/Types/Types";
import bookmarkFull from "../../../../public/assets/icon-bookmark-full.svg";
import bookmarkEmpty from "../../../../public/assets/icon-bookmark-empty.svg";
import movieIcon from "../../../../public/assets/icon-category-movie.svg";
import tveIcon from "../../../../public/assets/icon-category-tv.svg";
import circle from "../../../../public/assets/circle.svg";
import bookmarkPath from "@/utils/bookmarkPath";
import Image from "next/image";
interface MovieComponentWithBookmarkProps extends MovieComponentProps {
  onBookmark: (movie: MovieComponentProps) => void;
}
export const MainMovie: React.FC<MovieComponentWithBookmarkProps> = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isBookmark, setIsBookmark] = useState<boolean>(false);
  const bookmarkPathUrl = bookmarkPath(isHovered, isBookmark);

  const { title, thumbnail, year, category, rating, isBookmarked, isTrending,onBookmark } =
    props;

  const handleBookmarkClick = () => {
    setIsBookmark(!isBookmark);
    onBookmark(props);

  };

  const imagePath = `/${thumbnail?.regular?.large}`;

  const categoryImage = category == "Movie" ? movieIcon : tveIcon;

  return (
    <div className={styles.main}>
      <div className={styles.imageContainer}>
        <Image
          src={imagePath}
          alt={title}
          className={styles.image}
          width={1000}
          height={1000}
        />
        <div className={styles.overlay}>
          <div className={styles.bookmark} onClick={handleBookmarkClick}>
            <Image
              src={bookmarkPathUrl}
              alt=""
              className={styles.bookmarkImage}
            />
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.movieDetail}>
            <p className={styles.year}>{year}</p>
            <Image src={circle} alt=" " />
            <Image src={categoryImage} alt="" />
            <p className={styles.category}>{category}</p>
            <Image src={circle} alt=" " />
            <p className={styles.rating}>{rating}</p>
          </div>
          <h2 className={styles.title}>{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default MainMovie;
