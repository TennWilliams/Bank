function Home(){
  return (
    <Card
      bgcolor="info"
      header= "Williams Trust Bank"
      title="Welcome to Williams Trust Bank Webiste" 
      text="Please make a selection from the navigation bar."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
  }