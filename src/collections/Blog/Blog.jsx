import PropTypes from "prop-types";
import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({ blog, handleAddToBookmark }) => {
  const {
    cover,
    title,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  console.log(blog);
  return (
    <div className="border-b-2 m-5 p-5">
      <img className="mb-4 w-full" src={cover} alt={title}></img>
      <div className="flex justify-between">
        <div className="flex mb-4">
          <div>
            <img
              className="w-16 h-16 rounded-3xl"
              src={author_img}
              alt={author}
            ></img>
          </div>
          <div className="ml-5 mb-2">
            <p className="font-medium text-2xl text-custom-text-color ">
              {author}
            </p>
            <span>{posted_date}</span>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button onClick={() => handleAddToBookmark(blog)} className="ml-2">
            <FaRegBookmark />
          </button>
        </div>
      </div>

      <h1 className="font-bold text-5xl text-custom-text-color mb-4">
        {title}
      </h1>
      <div className="mb-7">
        {hashtags.map((hashtag, idx) => (
          <span key={idx}> #{hashtag}</span>
        ))}
      </div>

      <a href="/" className="text-blue-600 underline decoration-solid">
        Mark as read
      </a>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
};

export default Blog;
