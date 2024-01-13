const http = require('https');

const authToken = 'U2FsdGVkX19uc/H/k4C/e6...Py9iQ==';
const merchantId = '67f51bc...b619';

const options = {
  'method': 'POST',
  'hostname': 'api.neginpardakht.ir',
  'port': null,
  'path': '/v1/transaction/request',
  'headers': {
    'Content-Type': 'application/json',
    'AuthToken': authToken
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on('data', function (chunk) {
    chunks.push(chunk);
  });

  res.on('end', function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify({
  merchantId: merchantId,
  amount: 20000,
  callbackUrl: 'https://webya.ir'
}));
req.end();

