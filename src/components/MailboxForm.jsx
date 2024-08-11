import { useState } from "react"
import { useNavigate } from "react-router-dom"

const MailboxForm = ({ addMailbox }) => {
    const [boxForm, setBoxForm] = useState({
      boxSize: "",
      boxholder: "",
    });
  
    const navigate = useNavigate();
  
    const handleChange = (event) => {
      setBoxForm({
        ...boxForm,
        [event.target.name]: event.target.value,
      });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      addMailbox(boxForm);
      navigate("/mailbox");
    };
  
    return (
      <main>
        <h2>New Mailbox</h2>
        <form onSubmit={handleSubmit}>
        <label htmlFor="boxholder">Enter a Boxholder:</label>
          <input
            type="text"
            id="boxholder"
            name="boxholder"
            value={boxForm.boxholder}
            onChange={handleChange}
            required
          />
          <label htmlFor="boxSize">Select a Box Size:</label>
          <select
            id="boxSize"
            name="boxSize"
            value={boxForm.boxSize}
            onChange={handleChange}
            required
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </main>
    );
  }

export default MailboxForm