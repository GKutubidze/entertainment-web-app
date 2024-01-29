// BookmarksContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { MovieComponentProps } from '@/Types/Types';

interface BookmarksContextProps {
  bookmarkedMovies: MovieComponentProps[];
  setBookmarkedMovies: React.Dispatch<React.SetStateAction<MovieComponentProps[]>>;
}

const BookmarksContext = createContext<BookmarksContextProps | undefined>(undefined);

export const BookmarksProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [bookmarkedMovies, setBookmarkedMovies] = useState<MovieComponentProps[]>([]);

  return (
    <BookmarksContext.Provider value={{ bookmarkedMovies, setBookmarkedMovies }}>
      {children}
    </BookmarksContext.Provider>
  );
};

export const useBookmarks = () => {
  const context = useContext(BookmarksContext);
  if (!context) {
    throw new Error('useBookmarks must be used within a BookmarksProvider');
  }
  return context;
};
