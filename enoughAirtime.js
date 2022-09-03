export default function enoughAirtime(usage, airtimeAmount){
    var usageNow=usage.split(",")
    var usageTotal=0;
    for(var i=0;i<usageNow.length;i++){
     var currentUsage=usageNow[i].trim();
     if(currentUsage.startsWith('c')){
     usageTotal+=1.88;}
       else if(currentUsage.startsWith('d')){
           usageTotal+=12.00;}
         else if(currentUsage.startsWith('s')){
           usageTotal+=0.75;} 
   } var airtimeLeft = airtimeAmount-usageTotal
       var airtimeSum = (usageTotal>airtimeAmount)? "R0.00" : "R"+airtimeLeft.toFixed(2)
    return airtimeSum} 
  // if (airtimeSum<0){return "R"+0.00}
  console.log(enoughAirtime('call,call,call,data,sms,sms,call,data', 50))