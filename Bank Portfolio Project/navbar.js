function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg">
     <div className="container-fluid">
        <a className="navbar-brand" title="Home Page" href="#">
        <img src="favicon.png" alt="" width="30" height="30" className="d-inline-block align-text-top"></img>
        SVR Trust
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" title="Create an Account" href="#/CreateAccount/">Create Account</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" title="Make a Deposit" href="#/deposit/">Deposit</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" title="Make a Withdrawal" href="#/withdraw/">Withdraw</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" title="See All Transactions" href="#/alldata/">AllData</a>
            </li>          
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}