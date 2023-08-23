import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="ml-5 mt-5">
      <Link href={'/'} passHref>
        <span className="text-2xl text-white border border-1 bg-black rounded-md p-2">
            Home
        </span>
      </Link>
    </div>  
  )
}
