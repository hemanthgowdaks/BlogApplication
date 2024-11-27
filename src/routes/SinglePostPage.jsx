import { Link } from "react-router-dom";
import Image from "../components/Image";
import PostMenuActions from "../components/PostMenuActions";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* details  */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
            asperiores labore omnis.
          </h1>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">John Doe</Link>
            <span>on</span>
            <Link className="text-blue-800">2 Days ago</Link>
          </div>
          <p className="text-gray-600 font-medium">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium ipsam quaerat alias distinctio in recusandae cumque
            aliquam maiores sit dolores sint repudiandae rerum minima nisi
            similique voluptatum facere, cupiditate tempora.
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src="postImg.jpeg" w="600" className="rounded-2xl" />
        </div>
      </div>

      {/* content  */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* text  */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Praesentium ut quod alias corrupti ipsum! Similique fuga eius culpa
            exercitationem deleniti, minus amet modi odit dolorem doloremque
            voluptatibus sint facilis ipsum cumque quidem vitae tempora sit
            harum, repudiandae quasi sunt maxime. Molestiae neque eos
            exercitationem, necessitatibus iusto tempore repellendus.
            Consequatur nihil odit non aliquid, praesentium ducimus at cum rem
            facilis qui vero ipsa, voluptatem sequi beatae eaque quibusdam?
            Culpa et, dignissimos neque atque aliquid alias. Neque vero deleniti
            ipsum harum, eligendi ipsa maiores libero fugit odio, aut veritatis,
            commodi nisi similique.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque fuga
            officia qui velit aliquid, quis ipsum praesentium temporibus facere
            voluptatibus, nisi incidunt natus quo tempore! Aliquam ea
            repudiandae dolore! Assumenda dicta laboriosam quidem consequuntur
            incidunt sunt esse molestias perferendis deserunt. Sequi eius
            reprehenderit voluptatibus explicabo? Ex inventore deserunt dolorum
            ad reiciendis, laudantium sed eum molestias, fugit totam beatae
            magnam aspernatur labore amet dolorem illum voluptates aut eaque
            minima? Atque mollitia quod dignissimos dolores maxime error quos
            nostrum voluptate, laborum vero, aperiam libero quae officia eius
            dolore dolorum possimus, eum vitae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            sint amet cumque nisi quaerat rerum blanditiis soluta aperiam
            eligendi accusamus asperiores aliquam, quidem quasi veritatis error
            alias excepturi laborum laboriosam fuga rem porro! Doloremque odit
            iure quam enim, consequuntur numquam amet hic delectus impedit
            reprehenderit quidem natus culpa velit dolorum dolores sapiente unde
            officia eaque, ipsam aliquam nobis! Molestias architecto, eum
            nostrum consectetur officiis natus aliquid esse, sequi libero
            eligendi officia praesentium consequuntur eaque animi beatae sed
            odit sint atque fugit laborum debitis explicabo! Autem cumque qui
            sit aliquid.
          </p>
        </div>
        {/* menu  */}
        <div className="px-4 h-max sticky top-8 bg-white">
          <h1>Author</h1>
          <div className="">
            <Image
              src="userImg.jpeg"
              className="w-12 h-12 rounded-full object-cover"
              w="48"
              h="48"
            />
            <Link>John Doe</Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg" />
              </Link>
              <Link>
                <Image src="instagram.svg" />
              </Link>
            </div>
          </div>
          <PostMenuActions />
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
