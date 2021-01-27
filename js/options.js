$(function(){


    chrome.storage.sync.get(["total","limit"],(budget)=>
    {
       if(budget.total)
          {
             $("#spend").text(budget.total+" ₹");
          }
       else{
          $("#spend").text("0 ₹");
       }
 
       if(budget.limit)
          {
             $("#limit").val(budget.limit);
          }
       else{
          $("#limit").val(0);
       }
    });
 
    $("#submit").click(function(){
       var limit = $("#limit").val();
       if(limit){
        chrome.storage.sync.set({"limit":limit},function(){
            $("#limit").val(limit);
        });
       }
    });
 
    $("#reset").click(function(){
       chrome.storage.sync.set({"total":0},()=>
       {
        location.reload();
       });
    });
 });