import http.client

conn = http.client.HTTPSConnection("api.neginpardakht.ir")

payload = "{\n\t\"merchantId\": \"67f51bc64...19\",\n\t\"amount\": 20000,\n\t\"callbackUrl\": \"https://webya.ir\"\n}"

headers = {
    'Content-Type': "application/json",
    'AuthToken': "U2FsdGVkX19uc/H/k4C/e6oe5YGr6...iQ=="
    }

conn.request("POST", "/v1/transaction/request", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
