import Image from "./Image";
import { Link } from "react-router-dom";

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8 mb-12">
      {/* image */}
      <div className="md:hidden xl:block xl:w-1/3">
        <Image
          src="postImg.jpeg"
          className="rounded-2xl object-cover"
          w="735"
        />
      </div>
      {/* details  */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/test" className="text-4xl font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
          asperiores labore omnis.
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written By</span>
          <Link className="text-blue-800">John Doe</Link>
          <span>on</span>
          <Link className="text-blue-800">Web Design</Link>
          <span>2 Days ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eaque
          nesciunt ab illum, corrupti voluptas dolore velit. Quam, aliquid?
          Tempora distinctio debitis laudantium numquam reprehenderit provident
          sint labore sed quis deleniti!
        </p>
        <Link to="/test" className="underline text-blue-800 text-sm">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
