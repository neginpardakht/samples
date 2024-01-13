HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.neginpardakht.ir/v1/transaction/request"))
    .header("Content-Type", "application/json")
    .header("AuthToken", "U2FsdGVkX19uc/H/k4C/e6oe5YGr6lijKaw/....XHIW3gyPy9iQ==")
    .method("POST", HttpRequest.BodyPublishers.ofString("{\n\t\"merchantId\": \"67f51bc64fb...b619\",\n\t\"amount\": 20000,\n\t\"callbackUrl\": \"https://webya.ir\"\n}"))
    .build();
HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
System.out.println(response.body());
