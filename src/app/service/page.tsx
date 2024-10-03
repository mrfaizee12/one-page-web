import Navbar from "../navbar/page";

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex items-center justify-center text-center">
        <div>
          <h1 className="text-3xl font-bold mb-4">This is the Services Page</h1>
          <p className="text-lg">
            Learn more about the services we offer to help you.
          </p>
        </div>
      </div>
    </div>
  );
}
