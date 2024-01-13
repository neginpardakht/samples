wget --quiet \
  --method POST \
  --header 'Content-Type: application/json' \
  --header 'AuthToken: U2FsdGVkX19uc/H/k4C/e6oe5YGr6li...z7XHIW3gyPy9iQ==' \
  --body-data '{\n	"merchantId": "67f51...19",\n	"amount": 20000,\n	"callbackUrl": "https://webya.ir"\n}' \
  --output-document \
  - https://api.neginpardakht.ir/v1/transaction/request
