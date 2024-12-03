import { useUser } from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";

const Write = () => {
  const { isLoaded, isSignedIn } = useUser();

  const mutation = useMutation({
    mutationFn: (newPost) => {
      return axios.post(`${import.meta.env.VITE_API_URL}}`, newPost);
    },
  });
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isLoaded && !isSignedIn) {
    return <div>Please Login!</div>;
  }

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="text-xl font-medium">Create a New Post</h1>
      <form className="flex flex-col gap-6 flex-1 mb-6">
        <button className="w-max p-2 shadow-md rounded-xl test-sm text-gray-500 bg-white">
          Add a cover image
        </button>
        <input
          className="text-4xl font-semibold bg-transparent outline-none"
          type="text"
          placeholder="My Awesome story"
        />
        <div className="flex items-center gap-4">
          <label htmlFor="" className="text-sm">
            Choose a category:
          </label>
          <select className="rounded-xl p-2 bg-white shadow-md" name="" id="">
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="seo">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea
          className="rounded-xl p-4 bg-white shadow-md"
          name="desc"
          placeholder="A Short Description"
        />
        <ReactQuill
          theme="snow"
          className=" flex-1 rounded-xl bg-white shadow-md"
        />
        <button className="bg-blue-800 text-white py-3 rounded-xl font-medium w-36">
          Send
        </button>
      </form>
    </div>
  );
};

export default Write;
