<?php

$request = new HttpRequest();
$request->setUrl('https://api.neginpardakht.ir/v1/transaction/request');
$request->setMethod(HTTP_METH_POST);

$request->setHeaders([
  'Content-Type' => 'application/json',
  'AuthToken' => 'U2FsdGVkX19uc/H/k4C/e6...y9iQ=='
]);

$request->setBody('{
	"merchantId": "67f51bc...19",
	"amount": 20000,
	"callbackUrl": "https://webya.ir"
}');

try {
  $response = $request->send();

  echo $response->getBody();
} catch (HttpException $ex) {
  echo $ex;
}
