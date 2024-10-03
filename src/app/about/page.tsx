import Navbar from "../navbar/page";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex items-center justify-center text-center">
        <div>
          <h1 className="text-3xl font-bold mb-4">This is the About Us Page</h1>
          <p className="text-lg">
            Welcome to the About Us Page. Here you will find more information about us.
          </p>
        </div>
      </div>
    </div>
  );
}
