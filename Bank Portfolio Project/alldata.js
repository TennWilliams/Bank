function AllData(){
  const ctx = React.useContext(UserContext);
  
  return (
     <Card
      bgcolor="secondary"
      header="All Transactions"
      body={<div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <br></br><br></br>
          <p>Click Or Hover To See All Transactions</p>
        </div>
        <div className="flip-card-back">
        {JSON.stringify(ctx)}
        
        </div>
      </div>
    </div>
      }
    />
  );
}
