import Navbar from "./navbar/page";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      <Navbar />
      <div className="flex-grow flex items-center justify-center text-center">
        <div>
          <h1 className="text-3xl font-bold mb-4">This is the Home Page</h1>
          <p className="text-lg">
            Welcome to the Home Page.
          </p>
        </div>
      </div>
    </div>
  );
}
