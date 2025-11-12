import { CiHome } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { CiChat1 } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

const Nav = () => {
    return (
      <nav className="h20fixed right-0 bottom-0 left-0 sticky">
        <ul className="flex justify-around rounded-t-3xl bg-white p-4 shadow-lg">
          <li>
            <CiHome size={30} color="#F2968F" fontWeight={900} />
          </li>
          <li>
            <CiStar size={30} color="gray" />
          </li>
          <li>
            <CiChat1 size={30} color="gray" />
          </li>
          <li>
            <CiUser size={30} color="gray" />
          </li>
        </ul>
      </nav>
    );
}
 
export default Nav;