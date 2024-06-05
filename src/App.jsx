import "./App.css";
import Blogs from "./collections/Blogs/Blogs";
import Bookmarks from "./collections/Bookmarks/Bookmarks";
import Header from "./collections/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <div className="md:flex">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  );
}

export default App;
