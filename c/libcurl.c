CURL *hnd = curl_easy_init();

curl_easy_setopt(hnd, CURLOPT_CUSTOMREQUEST, "POST");
curl_easy_setopt(hnd, CURLOPT_URL, "https://api.neginpardakht.ir/v1/transaction/request");

struct curl_slist *headers = NULL;
headers = curl_slist_append(headers, "Content-Type: application/json");
headers = curl_slist_append(headers, "AuthToken: U2FsdGVkX19uc/H/k4C/e6oe5YGr6lijKaw/V5d2X...9z7XHIW3gyPy9iQ==");
curl_easy_setopt(hnd, CURLOPT_HTTPHEADER, headers);

curl_easy_setopt(hnd, CURLOPT_POSTFIELDS, "{\n\t\"merchantId\": \"67f51bc64fb...cc6bb619\",\n\t\"amount\": 20000,\n\t\"callbackUrl\": \"https://webya.ir\"\n}");

CURLcode ret = curl_easy_perform(hnd);
