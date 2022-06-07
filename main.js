    try {
        if (navigator.userAgentData.mobile){
            document.getElementById("button").textContent="mobile";
        }
        else {
            document.getElementById("button").textContent="not mobile";
        }
    }
  catch (err){
      document.getElementById("button").textContent="your browser dont support";
  }
