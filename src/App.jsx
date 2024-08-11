// src/App.jsx
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import MailboxForm from "./components/MailboxForm";
import MailboxList from "./components/MailboxList";
import MailboxDetails from "./components/MailboxDetails";

const mailboxExample = {
  _id: 1,
  boxSize: 'Small',
  boxholder: 'Alex',
};

const App = () => {
  const [mailboxes, setMailboxes] = useState([mailboxExample]);

  const addMailbox = (mailbox) => {
    mailbox._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, mailbox]);
  };

  return (
    <>
      <h1>Mailbox!</h1>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Post Office</h1>
            </main>
          }
        />
        <Route
          path="/mailbox"
          element={<MailboxList mailboxes={mailboxes} />}
        />
        <Route path="*" element={<h2>Nothing here</h2>} />
        <Route
          path="/mailbox/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
        <Route
          path="/mailbox/new"
          element={<MailboxForm addMailbox={addMailbox} />}
        />
      </Routes>
    </>
  );
};

export default App;
