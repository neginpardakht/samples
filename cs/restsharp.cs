var client = new RestClient("https://api.neginpardakht.ir/v1/transaction/request");
var request = new RestRequest(Method.POST);
request.AddHeader("Content-Type", "application/json");
request.AddHeader("AuthToken", "U2FsdGVkX19uc/H/k4C/e6oe5YGr6l...XHIW3gyPy9iQ==");
request.AddParameter("application/json", "{\n\t\"merchantId\": \"67f51bc64f...bb619\",\n\t\"amount\": 20000,\n\t\"callbackUrl\": \"https://webya.ir\"\n}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
