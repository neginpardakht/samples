HttpResponse<String> response = Unirest.post("https://api.neginpardakht.ir/v1/transaction/request")
  .header("Content-Type", "application/json")
  .header("AuthToken", "U2FsdGVkX19uc/H/k4C/...IW3gyPy9iQ==")
  .body("{\n\t\"merchantId\": \"67f51bc64fb...b619\",\n\t\"amount\": 20000,\n\t\"callbackUrl\": \"https://webya.ir\"\n}")
  .asString();
