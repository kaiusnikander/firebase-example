import { deleteDoc, doc } from "firebase/firestore";
import { useFirestore, useUser } from "reactfire";
import Button from 'react-bootstrap/Button';


const dateTimeFormat = new Intl.DateTimeFormat("en-GB", {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
});

export default function Message({ createdAt, text, displayName, id, uid }) {
  const { data: user } = useUser();
  const firestore = useFirestore();

  return (
    <div>
      [
      {createdAt?.seconds ? (
        <span>{dateTimeFormat.format(new Date(createdAt.seconds * 1000))}</span>
      ) : null}
      ]{" "}
      <strong>
        {"<"}
        {displayName ? displayName : null}
        {">"}
      </strong>{" "}
      {text}
      {uid === user.uid ? (
        <>
        <Button
        variant="outline-warning" onClick={async () => {
            await deleteDoc(doc(firestore, "messages", id));
          }}
        >
          Delete
        </Button>{' '}
        </>
      ) : null}
    </div>
  );
}