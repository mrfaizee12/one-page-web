

export default function Login() {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        <form className="mt-4">
          <input
            className="block mb-2 p-2 border"
            type="email"
            placeholder="Email"
          /> <br />
          <input
            className="block mb-2 p-2 border"
            type="password"
            placeholder="Password"
          /> <br />
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Login
          </button>
        </form>
      </div>
    );
  }
  