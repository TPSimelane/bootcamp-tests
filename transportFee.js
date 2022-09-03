export default function transportFee(shift,price){
    if (shift=='morning'){
   return price='R20'}
     else if (shift=='afternoon'){
   return price='R10'}
     else if (shift=='nightshift'){
   return price='free'}
    else if (shift==''||'!morning'||'!afternoon'||'!nightshift'){
   return price='Please enter "morning", "afternoon" or "nightshift".'}
   };
   console.log(transportFee('morning'))