window.addEventListener("message", (event) => {
    if (event.origin !== "http://localhost:8080") return;
  
    // event.source is window.opener
    console.log("Data recieved from C1", event.data);
    event.source.postMessage(
      "Sending Confirmation",
      event.origin
    );
  });
  