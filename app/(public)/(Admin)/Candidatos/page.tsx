import Link from "next/link";

const Candidatos = () => {
  return (
    <main>
      <div className="ml-5 mt-5">
        <Link href={'/Dashboard'} passHref>
          <span className="mt-2 text-2xl text-white border border-1 bg-black rounded-md p-2 ">
            Candidatos
          </span>
        </Link>
      </div>
    </main>
  );
};

export default Candidatos;