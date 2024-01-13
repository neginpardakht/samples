const settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.neginpardakht.ir/v1/transaction/request",
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "AuthToken": "U2FsdGVkX19uc/H/k4C/e6oe5YGr6li...W3gyPy9iQ=="
  },
  "processData": false,
  "data": "{\n\t\"merchantId\": \"67f51bc6...6bb619\",\n\t\"amount\": 20000,\n\t\"callbackUrl\": \"https://webya.ir\"\n}"
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
