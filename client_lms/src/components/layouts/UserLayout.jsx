import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar";

function UserLayout() {
  return (
    <div>
      {/* navbar */}
      <Header />

      <Container fluid>
        <Row>
          <Col md={3} xl={2} className="bg-dark text-white">
            <div className="p-3">
              <div>Welcome Back,</div>
              <br />
              <h5>Subodh Adhikari</h5>
            </div>
            <hr />
            <Sidebar />
          </Col>
          <Col md={9} xl={10}>
            {/* main body */}
            <main className="main">
              <Outlet />
            </main>
          </Col>
        </Row>
      </Container>

      {/* footer */}
      <Footer />
    </div>
  );
}
export default UserLayout;
