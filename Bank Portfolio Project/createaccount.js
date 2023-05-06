
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
      return false;
      
    if (!validate(email,    'email'))    
      return false;
      
    if (!validate(password, 'password')) 
    return false;

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
      txtcolor="danger"
      header="Create Account"
      status={status}
      body={show ? (  
              <>
              <p style={{color: "royalblue", marginBottom:"0px"}}>Name</p>
              <input type="input" className="form-control" id="name" placeholder="Enter Name" title="Enter Your Name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>

              <p style={{color: "royalblue", marginBottom:"0px"}}>Email Address</p>
              <input type="input" className="form-control" id="email" placeholder="Enter Email" title="Enter Your Email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
              
              <p style={{color: "royalblue", marginBottom:"0px"}}>Password</p>
              <input type="password" className="form-control" id="password" placeholder="Enter Password" title="Enter Your Password" value={password} onChange={e => setPassword(e.currentTarget.value)}/>
              
              <p style={{color: "royalblue",    
                  textAlign:"left", fontSize:"13px"}}>(Must be 8 or more characters long)</p>
              <br/>
              <button type="submit"  className="create" title="Create Account" onClick={handleCreate}>Create Account</button>
              
              </>
            ):(
              <>
              <h5 style={{color: "royalblue"}}>You Have Successfully Created An Account</h5>
              <h5 style={{color: "royalblue"}}>What Would You like To Do Next?</h5><br></br>
              <button type="submit" className="btn btn-outline-info" id="success" title="Another Account Needed" onClick={clearForm}>Add Another Account</button>
              <a role="button" id="log" className="btn btn-outline-success" title="Make A Deposit" href="#/deposit/">Deposit</a>
              <a role="button" id="log" className="btn btn-outline-danger" title="Make A Withdraw" href="#/withdraw/">Withdraw</a>
              </>
            )}
    />
  )
}