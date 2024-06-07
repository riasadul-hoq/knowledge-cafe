import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  const {
    id,
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
    <div className="border-solid border-4 border-red-600 m-5 p-5">
      <img className="mb-4" src={cover} alt={title}></img>
      <div className="flex justify-between">
        <div className="flex mb-4">
          <div>
            <img
              className="w-16 h-16 rounded-3xl"
              src={author_img}
              alt={author}
            ></img>
          </div>
          <div>
            <p className="font-medium text-2xl text-custom-text-color ml-1 mb-1">
              {author}
            </p>
            <span>{posted_date}</span>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
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

      <button>
        <a href="">Mark as read</a>
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
