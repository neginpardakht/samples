curl --request POST \
  --url https://api.neginpardakht.ir/v1/transaction/request \
  --header 'AuthToken: U2FsdGVkX19uc/H/k4C/e6oe5YGr6lijKaw/V5d...05/O9z7XHIW3gyPy9iQ==' \
  --header 'Content-Type: application/json' \
  --cookie api-session=s%253Aa7f8c21c-2b33-4cac-9210-f27d9fe58c17.QQR7Xhce7FSdWNKzBTsPCNRM2I%252FKcnUEqcSXhgFErlU \
  --data '{
	"merchantId": "67f51bc64fbb...cc6bb619",
	"amount": 20000,
	"callbackUrl": "https://webya.ir"
}'
