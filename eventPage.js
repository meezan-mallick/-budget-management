var opt = {
    
    type: "basic",
    title: "Primary Title",
    message: "Primary message to display",
    iconUrl: "icon48.png"
  }

  chrome.notifications.create(opt);
  alert("done");