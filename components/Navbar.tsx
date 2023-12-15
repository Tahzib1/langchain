import Image from "next/image"


const Navbar = () => {
  return (
    <nav>
      <div className="navbar bg-black text-neutral-content">
        <button className="btn btn-ghost text-xl"><Image width="24" height="24" src="/images/database_14.svg"  alt="ChatDB logo" />ChatDB</button>
      </div>
    </nav>
  )
}
export default Navbar