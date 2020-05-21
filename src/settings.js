let DEBUG = true;
let HOST_URL = "https://share-ro-test.herokuapp.com";
let SOCKET_URL = "wss://share-ro-test.herokuapp.com";
// let HOST_URL = "https://www.sharero.jp";
// let SOCKET_URL = "wss://www.sharero.jp";
if (DEBUG) {
  HOST_URL = "http://127.0.0.1:8000";
  SOCKET_URL = "ws://127.0.0.1:8000";
}

export { HOST_URL, SOCKET_URL };
