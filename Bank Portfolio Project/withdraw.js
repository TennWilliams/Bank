function Withdraw(){
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [withdraw, setWithdraw]         = React.useState('');
    const [balance, setBalance]         = React.useState(100);
    
    const ctx = React.useContext(UserContext);  
  
    
    const handleWithdraw = (event) => {
      console.log(withdraw);

      if (isNaN(withdraw)){
        setStatus('Amount must be a number');
        setTimeout(() => setStatus(''),5000);
        clearForm();
        return;
      }
      if (withdraw <= 0) {
        setStatus('Amount must be greater than 0');
        setTimeout(() => setStatus(''),5000);
        clearForm();
        return;
      }
      if (balance < withdraw){
        setStatus(`You do not have enough money to withdraw $${withdraw}. Your Account Balance is $${balance} Try a different amount.`);
        setTimeout(() => setStatus(''),5000);
        clearForm();
        return;
      }
      else{
      const newBalance = balance - withdraw;
      setBalance(newBalance)
      ctx.users.push(`Withdrew ${withdraw}`);
      setShow(false);
    }    
    event.preventDefault();
    
  }

    function clearForm(){
      setWithdraw('');
      setShow(true);
    }
  
    return (
      <Card
        bgcolor="secondary"
        
        header="Make A Withdrawal"
        status={status}
        body={show ? (  
                <>
                
              <div className="flip-card" style={{width: "250px", height:"60px", 
                marginLeft:"250px"}}>
              <div className="flip-card-inner">
              <div className="flip-card-front" style={{color: "red",    
                  fontSize:"20px", backgroundColor:"pink"}}>
                  <p>Click/Hover For Balance</p>
              </div>
              <div className="flip-card-back" style={{color: "red",   
                    backgroundColor:"pink", fontSize:"20px"}}>
                    Your Account Balance is <br></br> ${balance}  
              </div>
              </div>
              </div><br></br>
                <h4 style={{textAlign:"left"}}>How Much Would You Like To Withdraw?</h4><br></br>
                <h5 style={{textAlign:"left"}}>Amount</h5>
                <input type="input" width="200" className="form-control" id="withdraw" placeholder="Enter Amount" title="How Much?" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)} /><br/>
                
                
                <button type="submit" className="btn btn-danger" title="Make Withdrawal" onClick={handleWithdraw}>Withdraw</button>
                </>
              ):(
                <>
                <h5>You Successfully Withdrew ${withdraw}</h5>
                <h5>Your Account Balance is ${balance}</h5>
                <h5>What Would You like To Do Next?</h5><br></br>
                <button type="submit" className="btn btn-danger"  title="You Sure?" onClick={clearForm}>Make Another Withdraw</button>
                <a role="button" id="log" className="btn btn-success" title="Make a Deposit" href="#/deposit/">Make A Deposit</a>
                </>
              )}
      />
    )
  }
 
      
  