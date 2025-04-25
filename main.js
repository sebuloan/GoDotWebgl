const channel = new MessageChannel();

function onMessage(e) {
  const output = document.querySelector('.output');
  console.log("Message from iframe:", e.data);
  output.innerHTML = e.data;
}

function onLoad() {
  const iframe = document.querySelector('#godotFrame');
  console.log("onload called");

  channel.port1.onmessage = onMessage;

  iframe.contentWindow.postMessage("Hello from JS host!", '*', [channel.port2]);
}

document.querySelector("#postIt").addEventListener("click", (e) => {
  console.log("clicked post message");
  onLoad();
});
