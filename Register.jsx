import { useState } from "react";
function Register() {
  const [data, setData] = useState({ name: "", email: "", Text: ""});

  const handleChange = (e) => {setData({
      ...Data,
      [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => { e.preventDefault();
    console.log("Registered User:", Data);
    setData({ name: "", email: "", Text: ""});
  }

  return (
    <div style={{ width: "300px", margin: "50px auto" }}>
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter Name" value={Data.name} onChange={handleChange}/>
        <br />
        <br />
        <input type="email" name="email" placeholder="Enter Email" value={Data.email} onChange={handleChange}/>
        <br />
        <br />
        <input type="text" name="text" placeholder="Enter text" value={Data.text} onChange={handleChange}/>
        <br />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
export default Register;
