import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="m-3 p-3 bg-white rounded-lg">
      <h1 className="text-lg font-semibold text-custom-text-color ">{title}</h1>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object,
};

export default Bookmark;
