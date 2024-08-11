import { Link } from "react-router-dom";

const MailboxList = (props) => {
  return (
    <>
      <h2>Mailbox List</h2>
      <ul>
        {props.mailboxes.map((currentMailbox) => {
          return (
            <li key={currentMailbox._id}>
              <Link to={`/mailbox/${currentMailbox._id}`}>
                {currentMailbox.boxholder}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MailboxList;
