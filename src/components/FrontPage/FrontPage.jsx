import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function FrontPage() {
  useEffect(() => {
    axios
      .get("http://localhost:3001/test")
      .then((results) => console.log(results));
  }, []);
  return (
    <div id="FrontPage">
      {" "}
      <div className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 min-h-screen">
        <header className="bg-white py-4 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-semibold text-gray-700">Doučování</h1>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Pro Lektory
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="container mx-auto mt-12 text-center">
          <h1 className="text-5xl font-extrabold text-white">
            Najdeme Vám to nejlepší doučování!
          </h1>
          <p className="mt-4 text-xl text-gray-200">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vestibulum
            fermentum tortor id mi. Etiam sapien elit, consequat eget, tristique
            non, venenatis quis, ante. Suspendisse nisl. Nullam eget nisl.
            Phasellus rhoncus. Fusce dui leo, imperdiet in, aliquam sit amet,
            feugiat eu, orci. Nam libero tempore, cum soluta nobis est eligendi
            optio cumque nihil impedit quo minus id quod maxime placeat facere
            possimus, omnis voluptas assumenda est, omnis dolor repellendus.
            Nulla pulvinar eleifend sem. Aenean placerat. Curabitur sagittis
            hendrerit ante. Maecenas lorem.
          </p>

          <Link to="/objednavka">
            <button className="mt-6 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring focus:ring-indigo-200">
              Chci doučování
            </button>
          </Link>
          <p className="mt-4 text-xl text-gray-200">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vestibulum
            fermentum tortor id mi. Etiam sapien elit, consequat eget, tristique
            non, venenatis quis, ante. Suspendisse nisl. Nullam eget nisl.
            Phasellus rhoncus. Fusce dui leo, imperdiet in, aliquam sit amet,
            feugiat eu, orci. Nam libero tempore, cum soluta nobis est eligendi
            optio cumque nihil impedit quo minus id quod maxime placeat facere
            possimus, omnis voluptas assumenda est, omnis dolor repellendus.
            Nulla pulvinar eleifend sem. Aenean placerat. Curabitur sagittis
            hendrerit ante. Maecenas lorem. Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit. Vestibulum fermentum tortor id mi.
            Etiam sapien elit, consequat eget, tristique non, venenatis quis,
            ante. Suspendisse nisl. Nullam eget nisl. Phasellus rhoncus. Fusce
            dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Nam
            libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis
            voluptas assumenda est, omnis dolor repellendus. Nulla pulvinar
            eleifend sem. Aenean placerat. Curabitur sagittis hendrerit ante.
            Maecenas lorem.
          </p>
          <br></br>
        </main>

        <footer className="bg-white py-6">
          <div className="container mx-auto text-center text-gray-600">
            &copy; {new Date().getFullYear()} doucovani
          </div>
        </footer>
      </div>
    </div>
  );
}

export default FrontPage;
