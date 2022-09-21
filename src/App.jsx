import { useSigninCheck } from "reactfire";
import Channel from "./components/Channel";
import SignInOutButton from "./components/SignInOutButton";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";

export default function App() {
  const { status, data: signInCheckResult } = useSigninCheck();

  if (status === "loading") {
    return <span>loading...</span>;
  }

  return (
    <>
      <Navbar />
      <SignInOutButton />
      {signInCheckResult.signedIn && <Channel />}
    </>
  );
}
 