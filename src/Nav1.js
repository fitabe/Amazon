import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import MenuIcon from "@mui/icons-material/Menu";
import "./Nav1.css"
function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      {/* <Container> */}
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link eventKey={2} href="/">
            <MenuIcon />
          </Nav.Link>
          <Navbar.Brand className="border-white ab" href="#home">
            All
          </Navbar.Brand>
        </Nav>
        <Nav className="me-auto ">
          <span className="border-white">
            <Nav.Link href="/">Customer Service</Nav.Link>
          </span>
          {/* <Nav.Link href="/">Customer Service</Nav.Link> */}
          <Nav.Link href="/">Best Sellers</Nav.Link>
          <Nav.Link href="/"> Amazon Basic</Nav.Link>
          <Nav.Link href="/">New Release</Nav.Link>

          <NavDropdown title="Prime" id="collasible-nav-dropdown">
            <NavDropdown.Item className="action-prime" href="/">
              Prime
            </NavDropdown.Item>
            <NavDropdown.Item className="action-prime" href="#action/2">
              Today's Deals
            </NavDropdown.Item>
            <NavDropdown.Item className="action-prime" href="#action/3">
              New Member try Prime
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item className="action-prime" href="#action/4">
              Want up to 50% off Prime?
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/">Music</Nav.Link>
          <Nav.Link href="/">Books</Nav.Link>
          <Nav.Link href="/">Registry</Nav.Link>
          <Nav.Link href="/">Fashion</Nav.Link>
          <Nav.Link href="/">Amazon Home</Nav.Link>
          <div className="make">
            <Nav.Link href="/">Make Every day Earth Day</Nav.Link>
          </div>
        </Nav>
      </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
}

export default CollapsibleExample;
