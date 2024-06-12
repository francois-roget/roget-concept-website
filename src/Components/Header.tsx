import Image from "next/image";

const Header = () => {
    return (
        <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
            <Image src="/roget-concept-logo-white.JPG" alt="Roget Concept Logo" width={250} height={250}/>
        </div>
    )
}

export default Header;