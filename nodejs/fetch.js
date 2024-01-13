const fetch = require('node-fetch');

let url = 'https://api.neginpardakht.ir/v1/transaction/request';

let options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    AuthToken: 'U2FsdGVkX19uc/H/k4C/e6oe5YGr6lijKaw/V5d2...y9iQ==',
  },
  body: '{"merchantId":"67f51bc64...bb619","amount":20000,"callbackUrl":"https://webya.ir"}'
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));
