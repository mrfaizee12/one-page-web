import Navbar from "../navbar/page";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex items-center justify-center text-center">
        <div>
          <h1 className="text-3xl font-bold mb-4">This is the Privacy Policy Page</h1>
          <p className="text-lg">
            Here you can review our privacy policies and how we handle your data.
          </p>
        </div>
      </div>
    </div>
  );
}
