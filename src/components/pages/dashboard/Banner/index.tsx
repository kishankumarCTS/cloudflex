function Banner() {
  return (
    <div className="p-4 pl-7.5 rounded-2xl text-white bg-black">
      <p className="title-large">Hello!</p>
      <div className="flex gap-3">
        <h3 className="headline-medium">Ayush Singh</h3>{" "}
        <button className="body-small">Verified</button>
      </div>
      <p className="body-large">
        Welcome you Cloud Flex, your gateway to seamless cloud solutions
      </p>
      <div className="px-3 py-1.5 body-small rounded-[20px] font-medium bg-white text-[#0F172A]">
        <p className="opacity-70">
          Welcome to Cloud Flex! Complete your KYC for a secure, personalized
          cloud experience.
        </p>
      </div>
    </div>
  );
}

export default Banner;
