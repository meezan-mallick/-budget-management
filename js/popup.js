$(function () {

   chrome.storage.sync.get(["total", "limit"], (budget) => {
      if (budget.total) {
         $("#spend").text(budget.total + " ₹");
      }
      else {
         $("#spend").text("0 ₹");
      }

      if (budget.limit) {
         $("#limit").text(budget.limit + " ₹");
      }
      else {
         $("#limit").text("0 ₹");
      }

   });



   $("#submit").click(function () {
      chrome.storage.sync.get(["total", "limit"], function (budget) {
         var newTotal = 0;
         if (budget.total) {
            newTotal += parseInt(budget.total);
         }

         var amt = $("#amt").val();
         if (amt) {
            newTotal += parseInt(amt);
         }

         chrome.storage.sync.set({ "total": newTotal }, () => {
            if (amt && newTotal >= budget.limit) {
               alert("Limit reached..!!")
               var notifOptions = {
                   type: "basic",
                   iconUrl: "icon48.png",
                   title: "Limit reached!",
                   message: "Uh oh, look's like you've reached your alloted limit."
               };
               chrome.notifications.create('limitNotif', notifOptions);
           }
         });
         $("#spend").text(newTotal + " ₹");
         $("#amt").val("");
      });
   });
});