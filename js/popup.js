$(function(){
   $("#submit").click(function(){
      chrome.storage.sync.get("total",function(budget){
         var  newTotal = 0;
         if(budget.total)
         {
            newTotal += parseInt(budget.total); 
         }

         var amt = $("#amt").val();
         if(amt){
            newTotal += parseInt(amt);
         }

         chrome.storage.sync.set({"total":newTotal});
         $("#spend").text(newTotal+" ₹");
         $("#amt").val("");
      });
   });
});