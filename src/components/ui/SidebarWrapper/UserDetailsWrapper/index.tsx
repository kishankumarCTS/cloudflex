import UserDetails from "../UserDetails";

const UserDetailsWrapper = () => {
  return (
    <div className="flex flex-col gap-3 p-4 rounded-[20px] bg-themeBlue-100">
      <UserDetails avatar="" name="Ayush Singh" email="ayush@gmail.com" />
      <div>Region</div>
      <div>Project ID</div>
    </div>
  );
};

export default UserDetailsWrapper;
