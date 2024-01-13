AsyncHttpClient client = new DefaultAsyncHttpClient();
client.prepare("POST", "https://api.neginpardakht.ir/v1/transaction/request")
  .setHeader("Content-Type", "application/json")
  .setHeader("AuthToken", "U2FsdGVkX19uc/H/k4C/e6oe5YGr6lijKaw/V5d2XSdrAN...XHIW3gyPy9iQ==")
  .setBody("{\n\t\"merchantId\": \"67f51bc64fb...619\",\n\t\"amount\": 20000,\n\t\"callbackUrl\": \"https://webya.ir\"\n}")
  .execute()
  .toCompletableFuture()
  .thenAccept(System.out::println)
  .join();

client.close();
