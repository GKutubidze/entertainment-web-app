import React from 'react';
import bookmarkFull from "../../public/assets/icon-bookmark-full.svg";
import bookmarkEmpty from "../../public/assets/icon-bookmark-empty.svg";
import bookmarkFill from "../../public/assets/icon-bookmark-fill.svg";

export default function bookmarkPath(isHovered: boolean, isBookmark: boolean): string {
  let path = ""; // Declare path variable outside of the conditional blocks

  if (isBookmark) {
    path = bookmarkFull;
  } else if (isHovered) {
    path =bookmarkFill; 
  } else {
    path =  bookmarkEmpty;
  }

  return path; // Return the path variable
}
