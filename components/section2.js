import Link from "next/link";
import Image from "next/image";
import Author from "./_child/author";
import fetcher from "../lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";

export default function section2() {
  const { data, isLoading, isError } = fetcher("api/posts");
  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <Error></Error>;
  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Post</h1>
      {/* grid columns */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {data.map((value, index) => (
          <Post key={index} data={value}></Post>
        ))}
      </div>
    </section>
  );
}

function Post({ data }) {
  const { id, description, title, category, img, published, author } = data;
  return (
    <div className="item">
      <div className="images">
        <Link href={`/posts/${id}`}>
          <Image
            alt="img"
            src={img || "/"}
            className="rounded"
            width={500}
            height={350}
          ></Image>
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <Link
            href={`/posts/${id}`}
            className="text-orange-600 hover:text-orange-800"
          >
            {category || "Unknown"}
          </Link>
          <Link
            href={`/posts/${id}`}
            className="text-gray-800 hover:text-gray-600"
          >
            - {published || "Unknown"}
          </Link>
        </div>
        <div className="title">
          <Link
            href={`/posts/${id}`}
            className="text-xl font-bold text-gray-800 hover:text-gray-600"
          >
            {title || "Title"}
          </Link>
        </div>
        <p className="text-gray-500 py-3">{description || "Desc..."}</p>
        {author ? <Author {...author}></Author> : <></>}
      </div>
    </div>
  );
}
