import Navbar from "../navbar/page";

export default function ContactUs() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex items-center justify-center text-center">
        <div>
          <h1 className="text-3xl font-bold mb-4">This is the Contact Us Page</h1>
          <p className="text-lg">
            Feel free to reach out to us for any inquiries or support.
          </p>
        </div>
      </div>
    </div>
  );
}
