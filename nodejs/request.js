const request = require('request');

const authToken = 'U2FsdGVkX19uc/H/k4C/...Py9iQ==';
const merchantId = '67f51bc64f...b619';
const amount = 100000;
const callbackUrl = 'https://webya.ir';

const options = {
  method: 'POST',
  url: 'https://api.neginpardakht.ir/v1/transaction/request',
  headers: {
    'Content-Type': 'application/json',
    'AuthToken': authToken
  },
  body: {
    merchantId: merchantId,
    amount: amount,
    callbackUrl: callbackUrl
  },
  json: true,
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

