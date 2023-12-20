const username = prompt("Please enter your name") || "John Doe";
const socketConfig = `ws://localhost:8080/start_web_socket?username=${username}`;
const socket = new WebSocket(socketConfig);

socket.onmessage = (message) => {
  const data = JSON.parse(message.data);

  switch(data) {
    case 'update-users':
      let userListHTML = '';
      for(const username of data?usernames) {
        userListHTML += `<div>${username}</div>`;
      }
      document.querySelector('#users').innerHTML = userListHTML;
      break;
    case 'send-message':
      addMessage(data.username, data.message);
      break;
  }
}

function addMessage(username, message) {
  document.querySelector('conversation').innerHTML += `<b>${username} </b>: ${message} <br />`;
}

window.onload = () => {
  const outterDataEl = document.querySelector('#data');

  outterDataEl?.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
      const innerDataEl = document.querySelector('#data');
      const msg = innerDataEl.value;

      innerDataEl.value = '';
      socket.send(JSON.stringify({
        event: 'send-message',
        message: message
      }))
    }
  })
}