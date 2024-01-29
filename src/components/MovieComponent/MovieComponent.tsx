"use client";
import React, { useState } from "react";
import styles from "./MovieComponent.module.css";
import { MovieComponentProps } from "@/Types/Types";
import movieIcon from "../../../public/assets/icon-category-movie.svg";
import tveIcon from "../../../public/assets/icon-category-tv.svg";
import circle from "../../../public/assets/circle.svg";
import Image from "next/image";
import bookmarkPath from "@/utils/bookmarkPath";

interface MovieComponentWithBookmarkProps extends MovieComponentProps {
  onBookmark: (movie: MovieComponentProps) => void;
}
export const MovieComponent: React.FC<MovieComponentWithBookmarkProps> = (props) => {
  const { title, thumbnail, year, category, rating, onBookmark } = props;


  const [isHovered, setIsHovered] = useState(false);
  const [isBookmark, setIsBookmark] = useState<boolean>(false);
  const bookmarkPathUrl=bookmarkPath(isHovered,isBookmark);
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
 
  const handleBookmarkClick = () => {
    setIsBookmark(!isBookmark);
    onBookmark(props);
  };

  const categoryImage = category == "Movie" ? movieIcon : tveIcon;
  const imagePath =`/${thumbnail?.regular?.large}`
  


  return (
    <div className={styles.movie}>
      <div className={styles.imageContainer}>
        <Image
          src={imagePath}
          alt={title}
          className={styles.image}
          width={1000}
          height={1000}
        />
        <div className={styles.overlay}>
          <div
            className={styles.bookmark}
            onClick={handleBookmarkClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}

          >
            <Image src={bookmarkPathUrl} alt="" className={styles.bookmarkImage} />
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

          {/* Add more titles or information as needed */}
        </div>
      </div>
    </div>
  );
}
