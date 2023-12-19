import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full fixed bg-[#1D1B22] flex justify-between items-center py-3 top-0 z-50">
      <div className="h-full">
        <div className="ml-5 ">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Academia Numen"
              width={263}
              height={60}
              priority
              className="pt-3 "
            />
          </Link>
        </div>
      </div>

      <div className="mr-5 ">
        <ul className="md:flex gap-x-6 text-white">
          <li className="hover:bg-[#29A9FF] hover:text-black px-4 py-2 rounded-full font-bold">
            <Link href="/motion">
              <p>FORM 1</p>
            </Link>
          </li>
          <li className="hover:bg-[#29A9FF] hover:text-black px-4 py-2 rounded-full font-bold">
            <Link href="/chackra">
              <p>FORM 2</p>
            </Link>
          </li>
          <li className="hover:bg-[#29A9FF] hover:text-black px-4 py-2 rounded-full font-bold">
            <Link href="/mongo">
              <p>FORM 3</p>
            </Link>
          </li>
          <li className="hover:bg-[#29A9FF] hover:text-black px-4 py-2 rounded-full font-bold">
            <Link href="/contacts">
              <p>CONTACTO</p>
            </Link>
          </li>
          <li className="hover:bg-[#29A9FF] hover:text-black px-4 py-2 rounded-full font-bold">
            <Link href="/contacts">
              <p>CAMPUS</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
