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
      <img src={cover} alt={title}></img>
      <div className="flex justify-between">
        <div>
          <img src={author_img} alt={author}></img>
          <p>{author}</p>
          <span>{posted_date}</span>
        </div>
        <div>
          <span>{reading_time} min read</span>
        </div>
      </div>

      <h1 className="font-bold text-4xl custom-text-color">{title}</h1>
      <span>{hashtags}</span>
      <button>Mark as read</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
