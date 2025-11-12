import { CiBellOn } from "react-icons/ci";
import Link from "next/link";

const Header = () => {
  return (
    <div className="sticky top-0 mt-4 flex h-16 items-center justify-between bg-white px-5">
      <Link href="/">
        <h1 className="text-2xl">FamilyFriends</h1>
      </Link>
      <CiBellOn size={30} color="black" />
    </div>
  );
};

export default Header;
