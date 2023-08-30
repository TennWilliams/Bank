function NavBar(){

  function logOut(){
    logoutBtn.style.visibility="hidden";
      navBtn.style.visibility="hidden";
      navBtn2.style.visibility="hidden";
      navBtn3.style.visibility="hidden";
    window.localStorage.clear();
    window.location.href="#";
    alert('You Have Successfully Logged Out.\nHave A Wonderful Day!');
    
}

  return(
  
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" title="Home Page" style={{color:"blanchedalmond"}} href="#"> <img src="favicon.png" alt="" width="30" height="30" className="d-inline-block align-text-top"></img>SVR Trust</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" title="Create an Account" style={{color:"blanchedalmond"}} href="#/CreateAccount/">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" title="Login to your Account" style={{color:"blanchedalmond"}} href="#/login/">Login</a>
          </li>
            <li className="nav-item" id="navBtn">
              <a className="nav-link" title="Make a Deposit" style={{color:"blanchedalmond"}} href="#/deposit/">Deposit</a>
            </li>
            <li className="nav-item" id="navBtn2">
              <a className="nav-link" title="Make a Withdrawal" style={{color:"blanchedalmond"}} href="#/withdraw/">Withdraw</a>
            </li>
            <li className="nav-item" id="navBtn3">
              <a className="nav-link" title="See All Transactions" style={{color:"blanchedalmond"}} href="#/alldata/">All Data</a>
            </li>          
          </ul>
        </div>
        <div>
    <button id="logoutBtn" className="nav-item" style={{color:"blanchedalmond", fontWeight:"unset", minWidth:"fitContent"}}  title="Logout" onClick={logOut}> LogOut
    </button></div>
    </nav>
    
  );
}