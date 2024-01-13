var clientHandler = new HttpClientHandler
{
    UseCookies = false,
};
var client = new HttpClient(clientHandler);
var request = new HttpRequestMessage
{
    Method = HttpMethod.Post,
    RequestUri = new Uri("https://api.neginpardakht.ir/v1/transaction/request"),
    Headers =
    {
        { "AuthToken", "U2FsdGVkX19uc/H/k4C/e6oe5YGr6lijKaw/V5d2XSd...z7XHIW3gyPy9iQ==" },
    },
    Content = new StringContent("{\n\t\"merchantId\": \"67f51bc64fbb...b619\",\n\t\"amount\": 20000,\n\t\"callbackUrl\": \"https://webya.ir\"\n}")
    {
        Headers =
        {
            ContentType = new MediaTypeHeaderValue("application/json")
        }
    }
};
using (var response = await client.SendAsync(request))
{
    response.EnsureSuccessStatusCode();
    var body = await response.Content.ReadAsStringAsync();
    Console.WriteLine(body);
}
