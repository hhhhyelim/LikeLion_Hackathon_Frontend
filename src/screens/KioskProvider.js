// KioskProvider.js

import React, { createContext, useContext, useState } from 'react';

const KioskContext = createContext();

export const KioskProvider = ({ children }) => {
  const [posts, setPosts] = useState([]); // 게시물들을 저장할 상태

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  return (
    <KioskContext.Provider value={{ posts, addPost }}>
      {children}
    </KioskContext.Provider>
  );
};

export const useKiosk = () => {
  return useContext(KioskContext);
};
