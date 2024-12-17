import { Routes, Route } from "react-router-dom";
import { HomePage, DashboardPage } from "../pages";
import DefaultLayout from "../components/layouts/DefaultLayout";

function AppRoutes() {
  return (
    <Routes>
      {/* public pages */}
      <Route
        path="/"
        element={
          <DefaultLayout>
            <HomePage />
          </DefaultLayout>
        }
      ></Route>

      {/* private pages */}
      <Route path="/user" element={<DashboardPage />}></Route>
    </Routes>
  );
}
export default AppRoutes;
