import { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmail = (e)=>{
    setEmail(e.target.value)
  }
  return (
    <div className="container">
      <div className="form-container">
        <form action="post">
          <input type="text" name="email" value={email} placeholder="Entrez votre email" onChange={handleEmail} />
          <input type="password" name="password" value={password} placeholder="Entrez votre mot de passe" onChange={(e)=>setPassword(e.target.value)}/>
          <a href="#" className="forgotPass">Mot de passe oublié</a>
          <button type="button">Sign In</button>
          <hr />
        </form>
      </div>
      <div className="message-div">
        <h1>Vous revoilà! Connectez vous pour accéder à votre compte</h1>
      </div>
    </div>
  );
};

export default Form;
