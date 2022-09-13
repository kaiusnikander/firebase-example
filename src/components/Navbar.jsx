import Container from 'react-bootstrap/Container';
import BSNavbar from 'react-bootstrap/Navbar';

export default function Navbar() {
  return (
    <BSNavbar>
      <Container>
        <BSNavbar.Brand></BSNavbar.Brand>
        <BSNavbar.Toggle />
        <BSNavbar.Collapse className="justify-content-end">
          <BSNavbar.Text>
            Signed in as: <a href="#login">Kaius Nikander</a>
          </BSNavbar.Text>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}
