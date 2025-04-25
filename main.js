const channel = new MessageChannel();

function onMessage(e) {
  const output = document.querySelector('.output');
  console.log("Message from iframe:", e.data);
  output.innerHTML = e.data;
}

function onLoad() {
  const iframe = document.querySelector('#godotFrame');
  console.log("onload called");

  const jsonData = {
    name: "FuelCell",
    components: "yes",
    total: 4
  };

  channel.port1.onmessage = onMessage;

  // Send JSON as a string with port2
  iframe.contentWindow.postMessage(JSON.stringify(jsonData), '*', [channel.port2]);
}


document.querySelector("#postIt").addEventListener("click", (e) => {
  console.log("clicked post message");
  onLoad();
});
