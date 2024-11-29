import { Link } from "react-router-dom";
import MainCategories from "../components/MainCategories";
import FeaturedPosts from "../components/FeaturedPosts";
import PostList from "../components/PostList";

const Homepage = () => {
  return (
    <div className="flex flex-col mt-4 gap-4">
      {/* breadcrumbs */}
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <span>•</span>
        <span className="text-blue-800">Blogs and Articles</span>
      </div>

      {/* introduction */}

      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h1>
          <p className="mt-8 md:text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
            rerum accusantium.
          </p>
        </div>

        {/* animated button */}

        <Link to="/write" className="hidden md:block relative">
          <svg 
            viewBox="0 0 200 200" 
            width="200" 
            height="200"
            // className="text-lg tracking-widest animate-spin animatedButton"
            className="text-lg tracking-widest">
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Write your story •
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Write your story •
              </textPath>
            </text>
          </svg>
          <button className="absolute top-0 left-0 right-0 m-auto bottom-0 w-20 h-20 bg-blue-800 rounded-full flex justify-center items-center">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>
          </button>
        </Link>
      </div>

      {/* categories */}
      <MainCategories />

      {/* featured post */}
      <FeaturedPosts />

      {/* post list */}
      <div>
        <h1 className="my-8 text-2xl text-gray-600">Recent Post</h1>
        <PostList />
      </div>
    </div>
  );
};

export default Homepage;
