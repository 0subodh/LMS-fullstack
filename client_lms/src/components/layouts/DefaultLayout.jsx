import Footer from "./Footer";
import Header from "./Header";

function DefaultLayout({ children }) {
  return (
    <div>
      {/* navbar */}
      <Header />

      {/* main body */}
      <main className="main">{children}</main>

      {/* footer */}
      <Footer />
    </div>
  );
}
export default DefaultLayout;
