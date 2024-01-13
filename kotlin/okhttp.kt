val client = OkHttpClient()

val mediaType = MediaType.parse("application/json")
val body = RequestBody.create(mediaType, "{\n\t\"merchantId\": \"67f51bc6...b619\",\n\t\"amount\": 20000,\n\t\"callbackUrl\": \"https://webya.ir\"\n}")
val request = Request.Builder()
  .url("https://api.neginpardakht.ir/v1/transaction/request")
  .post(body)
  .addHeader("Content-Type", "application/json")
  .addHeader("AuthToken", "U2FsdGVkX19uc/H/k4C/e6oe5YGr6li...IW3gyPy9iQ==")
  .build()

val response = client.newCall(request).execute()
