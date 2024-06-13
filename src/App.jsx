import { useState } from "react";
import "./App.css";
import Blogs from "./collections/Blogs/Blogs";
import Bookmarks from "./collections/Bookmarks/Bookmarks";
import Header from "./collections/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
    // console.log(`${blog} added`);
  };

  const handleMarkAsRead = (time) => {
    setReadingTime(readingTime + time);
    // console.log(`${time} added`);
  };

  return (
    <>
      <Header></Header>
      <div className="md:flex lg:flex container mx-auto">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
