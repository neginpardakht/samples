OkHttpClient client = new OkHttpClient();

MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\n\t\"merchantId\": \"67f51bc64...b619\",\n\t\"amount\": 20000,\n\t\"callbackUrl\": \"https://webya.ir\"\n}");
Request request = new Request.Builder()
  .url("https://api.neginpardakht.ir/v1/transaction/request")
  .post(body)
  .addHeader("Content-Type", "application/json")
  .addHeader("AuthToken", "U2FsdGVkX19uc/H/k4C/e6oe5YGr6lijKaw/V5d2...HIW3gyPy9iQ==")
  .build();

Response response = client.newCall(request).execute();
