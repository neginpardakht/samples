import requests

url = "https://api.neginpardakht.ir/v1/transaction/request"

payload = {
    "merchantId": "67f51bc...19",
    "amount": 20000,
    "callbackUrl": "https://webya.ir"
}
headers = {
    "Content-Type": "application/json",
    "AuthToken": "U2FsdGVkX19uc/H/k4C...y9iQ=="
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
