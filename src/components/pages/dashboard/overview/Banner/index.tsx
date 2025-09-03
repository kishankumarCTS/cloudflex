export default function Banner() {
  return (
    <div className="p-6 rounded-2xl text-white bg-gradient-to-r from-blue-600 to-indigo-700 shadow">
      <p className="text-lg font-medium">Hello!</p>

      <div className="flex items-center gap-3 mt-1">
        <h3 className="text-2xl font-semibold">Ayush Singh</h3>
        <button className="px-3 py-1 text-xs rounded-full bg-white text-blue-700 font-medium">
          Verified
        </button>
      </div>

      <p className="mt-2 text-base">
        Welcome you Cloud Flex, your gateway to seamless cloud solutions
      </p>

      <div className="mt-4 px-4 py-3 rounded-xl bg-white text-gray-800">
        <p className="text-sm opacity-70">
          Welcome to Cloud Flex! Complete your KYC for a secure, personalized
          cloud experience.
        </p>
      </div>
    </div>
  );
}
