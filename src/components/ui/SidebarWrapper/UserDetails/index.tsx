import Image from "next/image";

type Props = {
  avatar: string;
  name: string;
  email: string;
};

function UserDetails({ avatar = "", name, email }: Props) {
  return (
    <div className="w-[100%] flex items-center gap-3">
      <div className="relative w-12 min-w-12 h-12 rounded-[48px] overflow-hidden">
        {!!avatar && (
          <Image
            className="object-cover"
            src={avatar}
            alt="Rounded avatar"
            fill
          />
        )}
      </div>
      {/* TODO: add slate color in theme for text color */}
      <div className="flex flex-col overflow-hidden">
        <span className="title-medium leading-6 tracking-normal font-medium text-[#0F172A] overflow-ellipsis">
          {name}
        </span>
        <span className="label-medium leading-4 tracking-normal text-[#475569]">
          {email}
        </span>
      </div>
    </div>
  );
}

export default UserDetails;
