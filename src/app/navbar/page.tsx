import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            aria-label="Faizan Anjum Logo"
          >
            <img
              src="https://e1.pngegg.com/pngimages/536/365/png-clipart-f-type-logos-for-sale-black-and-red-f-logo-thumbnail.png"
              alt="f logo"
              className="w-10 h-10 rounded-full"
            />
            <span className="ml-3 text-xl">Faizan Anjum</span>
          </a>

          {/* Navigation List */}
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
            <ul className="flex flex-wrap items-center">
              <li className="ml-2 mr-5">
                <Link
                  className="hover:bg-red-500 hover:text-white inline-block p-2 rounded"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="mr-5">
                <Link
                  className="hover:bg-blue-500 hover:text-white inline-block p-2 rounded"
                  href="/about"
                >
                  About Us
                </Link>
              </li>
              <li className="mr-5">
                <Link
                  className="hover:bg-green-500 hover:text-white inline-block p-2 rounded"
                  href="/contact-us"
                >
                  Contact Us
                </Link>
              </li>
              <li className="mr-5">
                <Link
                  className="hover:bg-sky-500 hover:text-white inline-block p-2 rounded"
                  href="/service"
                >
                  Services
                </Link>
              </li>
              <li className="mr-5">
                <Link
                  className="hover:bg-pink-500 hover:text-white inline-block p-2 rounded"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </nav>

          {/* Login and Sign Up Buttons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/login">
              <button className="inline-flex items-center bg-blue-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-orange-500 rounded text-base">
                Login
              </button>
            </Link>

            <Link href="/sign-up">
              <button className="inline-flex items-center bg-orange-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-base">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
