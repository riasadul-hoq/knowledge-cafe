import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 lg:w-1/3">
      <div className=" bg-purple-100 rounded-lg mx-2 my-5 p-2">
        <h1 className="m-2 p-2 text-2xl font-bold text-purple-600 text-center">
          Spent time on read: {readingTime} min
        </h1>
      </div>
      <div className=" bg-gray-100 rounded-lg m-2 p-2">
        <h1 className="m-2 p-2 text-2xl text-custom-text-color font-bold">
          Bookmarked Blogs: {bookmarks.length}
        </h1>
        {bookmarks.map((bookmark, idx) => (
          <Bookmark key={idx} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};

export default Bookmarks;
