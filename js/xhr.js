const data = JSON.stringify({
  "merchantId": "67f51bc6...b619",
  "amount": 20000,
  "callbackUrl": "https://webya.ir"
});

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://api.neginpardakht.ir/v1/transaction/request");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("AuthToken", "U2FsdGVkX19uc/H/k4...z7XHIW3gyPy9iQ==");

xhr.send(data);
