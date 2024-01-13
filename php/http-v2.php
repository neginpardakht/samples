<?php

$client = new http\Client;
$request = new http\Client\Request;

$body = new http\Message\Body;
$body->append('{
	"merchantId": "67f51b...619",
	"amount": 20000,
	"callbackUrl": "https://webya.ir"
}');

$request->setRequestUrl('https://api.neginpardakht.ir/v1/transaction/request');
$request->setRequestMethod('POST');
$request->setBody($body);

$request->setHeaders([
  'Content-Type' => 'application/json',
  'AuthToken' => 'U2FsdGVkX19uc/H/k4...9iQ=='
]);

$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();
