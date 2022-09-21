import Container from 'react-bootstrap/Container';
import BSNavbar from 'react-bootstrap/Navbar';  
import { useUser } from 'reactfire';
import SignInOutButton from './SignInOutButton';

export default function Navbar() {
  const {data:user} = useUser();

  return (
    <>
    <BSNavbar collapseOnSelect fixed='top' expand='sm'bg='dark' variant='dark'>
      <Container>
        <BSNavbar.Brand>Chatti</BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls='responsive-navbar-nav' />
        <BSNavbar.Collapse className="justify-content-end">
          {user && <BSNavbar.Text>
            Signed in as: <a>{user.displayName}</a>
          </BSNavbar.Text>}
        </BSNavbar.Collapse>
        <SignInOutButton/>
      </Container>
    </BSNavbar>
    </>
  );
}
