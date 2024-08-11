import { useParams } from "react-router-dom"; 

const MailboxDetails = ({ mailboxes }) => {
    const { mailboxId } = useParams();

    const mailbox = mailboxes.find((mailbox) => mailbox._id === Number(mailboxId));

    return (
        <>
            <h2>Mailbox Details</h2>
            <p>Box Holder: {mailbox.boxholder}</p>
            <p>Box Size: {mailbox.boxSize}</p>
        </>
    );
}

export default MailboxDetails;