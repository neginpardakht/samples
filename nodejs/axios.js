var axios = require("axios").default;

var options = {
  method: 'POST',
  url: 'https://api.neginpardakht.ir/v1/transaction/request',
  headers: {
    'Content-Type': 'application/json',
    AuthToken: 'U2FsdGVkX19uc/H/k4C/e6oe5YGr6lij....z05/O9z7XHIW3gyPy9iQ=='
  },
  data: {
    merchantId: '67f51bc64fbb60....619',
    amount: 20000,
    callbackUrl: 'https://mywerbsite.shop'
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});

