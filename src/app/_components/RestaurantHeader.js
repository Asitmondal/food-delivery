import Link from "next/link"
import logo from './logo.jpg';
const RestaurantHeader = () => {
    return (
      <div>
        <div>
          <img src={logo} />
        </div>
        <ul>
          <li>
            <Link href={"/"}> Home </Link>
          </li>
          <li>
            <Link href={"/"}> Login/SignUp </Link>
          </li>
          <li>
            <Link href={"/"}> Profile</Link>
          </li>
        </ul>
      </div>
    );
}

export default RestaurantHeader;