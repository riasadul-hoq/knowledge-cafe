import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="w-1/3 bg-gray-100 rounded-lg m-2 p-2">
      <h1 className="m-2 p-2 text-2xl text-custom-text-color font-bold">
        Bookmarked Blogs: {bookmarks.length}{" "}
      </h1>
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
};

export default Bookmarks;
