function Deposit(){
    const ctx = React.useContext(UserContext);
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [deposit, setDeposit]         = React.useState('');
    const [balance, setBalance]         = React.useState(100);
    
  
    const handleDeposit = (event) => {
      console.log(deposit);

      if (isNaN(deposit)){
        setStatus('Amount must be a number');
        setTimeout(() => setStatus(''),3000);
        clearForm();
        return;
      }
      if (deposit <= 0) {
        setStatus('Amount must be greater than 0');
        setTimeout(() => setStatus(''),3000);
        clearForm();
        return;
      }
      
      else{
      const newBalance = +balance + +deposit;
      setBalance(newBalance);
     //ctx.users.push(`Deposited: $${deposit}`);
      ctx.users.push({deposit});
      setShow(false);
    }    
    event.preventDefault();
    
  }

    function clearForm(){
      setDeposit('');
      setShow(true);
    }
  
    return (
      <Card
        bgcolor="info"
        header="Make A Deposit"
        status={status}
        body={show ? (  
                <>
                
              <div className="flip-card" style={{width: "250px", height:"60px", 
                marginLeft:"17vw"}}>
              <div className="flip-card-inner">
              <div className="flip-card-front" style={{color: "purple",    
                  fontSize:"20px", backgroundColor:"palevioletred"}}>
                  <p>Click/Hover For Balance</p>
              </div>
              <div className="flip-card-back" style={{color: "purple",   
                    backgroundColor:"palevioletred", fontSize:"20px"}}>
                    Your Account Balance is <br></br> ${balance}  
              </div>
              </div>
              </div><br></br>
                <h4 style={{textAlign:"left"}}>How Much Would You Like To Deposit?</h4><br></br>
                <h5 style={{textAlign:"left"}}>Amount</h5>
                <input type="input" width="200" className="form-control" id="withdraw" placeholder="Enter Amount" title="How Much?" value={deposit} onChange={e => setDeposit(e.currentTarget.value)} /><br/>
                <button type="submit" className="create" title="Make Deposit" onClick={handleDeposit}>Make Deposit</button>
                </>
              ):(
                <>
                <h5>You Successfully Deposited ${deposit}</h5>
                <h5>Your Account Balance is ${balance}</h5>
                <h5>What Would You like To Do Next?</h5><br></br>
                <button type="submit" id="log" className="btn btn-success" title="Another Deposit" onClick={clearForm}>Another Deposit</button>
                <a role="button" id="log" className="btn btn-danger" title="You Sure?" href="#/withdraw/">Withdraw</a>
                </>
              )}
      />
    )
  }
 
      
  