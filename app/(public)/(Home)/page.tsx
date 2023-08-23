import Link from "next/link";

const Home = () => {
  return (
    <main>
      <Link href={'/Dashboard'} passHref>
        <span className="mt-2 text-2xl text-white border border-1 bg-black rounded-md p-2 ">
            Dashboard
        </span>
      </Link>
    </main>
  );
};

export default Home;