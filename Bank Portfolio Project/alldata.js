function AllData(){
  const ctx = React.useContext(UserContext);
  
  return (

    
     <Card
      bgcolor="primary"
      txtcolor="light"
      header="All Transactions"
      title={`Transaction: ${ctx.name}`}
      body={JSON.stringify(ctx)}
    />
  );
}
