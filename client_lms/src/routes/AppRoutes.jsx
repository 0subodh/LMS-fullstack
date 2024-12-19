import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  DashboardPage,
  SignInPage,
  SignUpPage,
  Books,
  ForgetPasswordPage,
  NewBookPage,
  EditBookPage,
  BookLandingPage,
  ReviewsPage,
  UserPage,
  Profile,
  Borrow,
} from "../pages";
import DefaultLayout from "../components/layouts/DefaultLayout";
import UserLayout from "../components/layouts/UserLayout";

function AppRoutes() {
  return (
    <Routes>
      {/* public pages */}
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="signin" element={<SignInPage />} />
        <Route path="forget-password" element={<ForgetPasswordPage />} />
      </Route>

      {/* private pages */}
      <Route path="/user" element={<UserLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="books" element={<Books />} />
        <Route path="new-book" element={<NewBookPage />} />
        <Route path="edit-book" element={<EditBookPage />} />
        <Route path="borrow-history" element={<Borrow />} />
        <Route path="booklanding" element={<BookLandingPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
        <Route path="all" element={<UserPage />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}
export default AppRoutes;
