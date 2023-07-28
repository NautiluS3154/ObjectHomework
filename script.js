const student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
  };
  
  const properties = Object.keys(student);
  console.log(properties.join(","));
// *******************************************************************  
const cinema = {
    soldTickets: 100,
    ticketCost: 10
  };
  
  function calculateEarnings(cinema) {
    return cinema.soldTickets * cinema.ticketCost;
  }
  
  const earnings = calculateEarnings(cinema);
  console.log("Earnings for one session:", earnings);
  
// *******************************************************************  
const cinema = {
    soldTickets: 100,
    ticketCost: 10
  };
  
  function calculateEarnings(cinema) {
    return cinema.soldTickets * cinema.ticketCost;
  }
  
  const earnings = calculateEarnings(cinema);
  console.log("Earnings for one session:", earnings);
  
// ******************************************************************* 
const student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
  };
  
  const length = Object.keys(student).length;
  console.log("Length of the object:", length);
  
// *******************************************************************
function isPlainObject(obj) {
    return typeof obj === "object" && obj !== null && !Array.isArray(obj);
  }
  
  console.log(isPlainObject({ a: 1 })); 
  console.log(isPlainObject([1, 2, 3])); 
  
// *******************************************************************  