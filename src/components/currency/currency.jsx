//currency component 
import React from "react";
function CurrencyDisplay(props) {
  const { amount } = props;

  //this is the format for the currency 
  const formattedCurrency = amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  return <span>{formattedCurrency}</span>;}
  export default CurrencyDisplay;