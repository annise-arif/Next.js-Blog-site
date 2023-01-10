import Link from "next/link";
import Image from "next/image";
import Author from "./_child/author";
// import postImg1 from "../images/articles/posts/img1.jpg";
// import postImg2 from "../public/images/articles/posts/img2.jpg";
// import postImg3 from "../public/images/articles/posts/img3.jpg";
// import postImg4 from "../public/images/articles/posts/img4.jpg";
// import postImg5 from "../public/images/articles/posts/img5.jpg";
// import postImg6 from "../public/images/articles/posts/img6.jpg";
// import postImg7 from "../public/images/articles/posts/img7.jpg";

export default function section2() {
  // const postData = [
  //     {
  //       id: 1,
  //       img: "postImg1",
  //       date: "- July 3, 2022",
  //       title: "Your most unhappy customers are your greatest source of learning",
  //       para: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
  //     },
  //     {
  //       id: 2,
  //       img: postImg2,
  //       date: "- July 3, 2022",
  //       title: "Your most unhappy customers are your greatest source of learning",
  //       para: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
  //     },
  //     {
  //       id: 3,
  //       img: postImg3,
  //       date: "- July 3, 2022",
  //       title: "Your most unhappy customers are your greatest source of learning",
  //       para: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
  //     },
  //     {
  //       id: 4,
  //       img: postImg4,
  //       date: "- July 3, 2022",
  //       title: "Your most unhappy customers are your greatest source of learning",
  //       para: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
  //     },
  //     {
  //       id: 5,
  //       img: postImg5,
  //       date: "- July 3, 2022",
  //       title: "Your most unhappy customers are your greatest source of learning",
  //       para: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
  //     },
  //     {
  //       id: 6,
  //       img: postImg6,
  //       date: "- July 3, 2022",
  //       title: "Your most unhappy customers are your greatest source of learning",
  //       para: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
  //     },
  //     {
  //       id: 7,
  //       img: postImg7,
  //       date: "- July 3, 2022",
  //       title: "Your most unhappy customers are your greatest source of learning",
  //       para: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
  //     },
  //   ];
  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Post</h1>
      {/* grid columns */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
      </div>
    </section>
  );
}

function Post() {
  return (
    <div className="item">
      <div className="images">
        <Link href={"/"}>
          <Image
            src={"/images/articles/posts/img1.jpg"}
            className="rounded"
            width={500}
            height={350}
          ></Image>
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <Link href={"/"} className="text-orange-600 hover:text-orange-800">
            Business, Travel
          </Link>
          <Link href={"/"} className="text-gray-800 hover:text-gray-600">
            - July 3, 2022
          </Link>
        </div>
        <div className="title">
          <Link
            href={"/"}
            className="text-xl font-bold text-gray-800 hover:text-gray-600"
          >
            Your most unhappy customers are your greatest source of learning
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic life One day however a small line of blind
          text by the name of Lorem Ipsum decided to leave for the far World of
          Grammar.
        </p>
        <Author></Author>
      </div>
    </div>
  );
}
