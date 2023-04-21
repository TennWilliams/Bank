
function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isValid, setIsValid] = React.useState(false);
  const ctx = React.useContext(UserContext);  

  function validate(field, label){
     if (!field) {
       setStatus('Enter your ' + label);
       setTimeout(() => setStatus(''),3000);
       return false;
      }
      if (label==="password" && password.length < 8) {
        setStatus(label + ' must be 8 or more characters long');
        setTimeout(() => setStatus(''),3000);
        return false;
      }



      return true;
 }



  function handleCreate(){
    console.log(name,email,password);
    if (!validate(name,     'name'))     
      return;
      
    if (!validate(email,    'email'))    
      return;
      
    if (!validate(password, 'password')) 
    return;

    else
    ctx.users.push({name,email,password,balance:100});
    setShow(false);
  }    

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="light"
      txtcolor="info"
      header="Create Account"
      status={status}
      body={show ? (  
              <>
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
              <button type="submit" disabled={isValid} className="create" title="Create Account" onClick={handleCreate}>Create Account</button>
              </>
            ):(
              <>
              <h5>You Have Successfully Created An Account</h5>
              <h5>What Would You like To Do Next?</h5><br></br>
              <button type="submit" className="btn btn-outline-success" title="Another Account Needed" onClick={clearForm}>Add Another Account</button>
              <a role="button" id="log" className="btn btn-outline-primary" title="Login To Your Account" href="#/login/">Login</a>
              </>
            )}
    />
  )
}