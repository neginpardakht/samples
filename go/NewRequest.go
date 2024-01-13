package main

import (
	"fmt"
	"strings"
	"net/http"
	"io/ioutil"
)

func main() {

	url := "https://api.neginpardakht.ir/v1/transaction/request"

	payload := strings.NewReader("{\n\t\"merchantId\": \"67f51bc64fb...b619\",\n\t\"amount\": 20000,\n\t\"callbackUrl\": \"https://webya.ir\"\n}")

	req, _ := http.NewRequest("POST", url, payload)

	req.Header.Add("Content-Type", "application/json")
	req.Header.Add("AuthToken", "U2FsdGVkX19uc/H/k4C/e6oe5YGr6lijKaw/V5d2XSdrAN...gyPy9iQ==")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
