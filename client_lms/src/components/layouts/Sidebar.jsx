import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <Stack gap={3}>
      <Link className="nav-link p-2" to="/user">
        Dashboard
      </Link>
      <Link className="nav-link p-2" to="/user/books">
        Books
      </Link>
      <Link className="nav-link p-2" to="/user/reviews">
        Reviews
      </Link>
      <Link className="nav-link p-2" to="/user/all">
        All Users
      </Link>
      <Link className="nav-link p-2" to="/user/borrow-history">
        Borrow History
      </Link>
      <Link className="nav-link p-2" to="/user/profile">
        Profile
      </Link>
    </Stack>
  );
}

export default Sidebar;
