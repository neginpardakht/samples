$headers=@{}
$headers.Add("Content-Type", "application/json")
$headers.Add("AuthToken", "U2FsdGVkX19uc/H/k4C/e6oe5...9iQ==")
$response = Invoke-WebRequest -Uri 'https://api.neginpardakht.ir/v1/transaction/request' -Method POST -Headers $headers -ContentType 'application/json' -Body '{
	"merchantId": "67f51bc64...619",
	"amount": 20000,
	"callbackUrl": "https://webya.ir"
}'
