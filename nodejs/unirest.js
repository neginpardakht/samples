const unirest = require("unirest");

const req = unirest("POST", "https://api.neginpardakht.ir/v1/transaction/request");

const CookieJar = unirest.jar();
req.jar(CookieJar);

req.headers({
  "Content-Type": "application/json",
  "AuthToken": "U2FsdGVkX19uc/H/k4C/e6oe5Y...y9iQ=="
});

req.type("json");
req.send({
  "merchantId": "67f51b...619",
  "amount": 20000,
  "callbackUrl": "https://webya.ir"
});

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});

