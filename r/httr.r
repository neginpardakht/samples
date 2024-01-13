library(httr)

url <- "https://api.neginpardakht.ir/v1/transaction/request"

payload <- "{\n\t\"merchantId\": \"67f51b...b619\",\n\t\"amount\": 20000,\n\t\"callbackUrl\": \"https://webya.ir\"\n}"

encode <- "json"

response <- VERB("POST", url, body = payload, add_headers(AuthToken = 'U2FsdGVkX19uc/H/k4C/...y9iQ==', '), content_type("application/json"), set_cookies(`api-session` = "s%253Aa7f8c21c-2b33-4cac-9210-f27d9fe58c17.QQR7Xhce7FSdWNKzBTsPCNRM2I%252FKcnUEqcSXhgFErlU"), encode = encode)

content(response, "text")
