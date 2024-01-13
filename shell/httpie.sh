echo '{
	"merchantId": "67f51bc...19",
	"amount": 20000,
	"callbackUrl": "https://webya.ir"
}' |  \
  http POST https://api.neginpardakht.ir/v1/transaction/request \
  AuthToken:'U2FsdGVkX19uc/H/k4C/e6oe5YGr6.SdrA....9iQ==' \
  Content-Type:application/json \
  User-Agent:insomnia/8.4.5 \
  cookie:api-session=s%253Aa7f8c21c-2b33-4cac-9210-f27d9fe58c17.QQR7Xhce7FSdWNKzBTsPCNRM2I%252FKcnUEqcSXhgFErlU
