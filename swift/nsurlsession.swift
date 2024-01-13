import Foundation

let headers = [
  "Content-Type": "application/json",
  "AuthToken": "U2FsdGVkX19...9iQ=="
]
let parameters = [
  "merchantId": "67f51b...19",
  "amount": 20000,
  "callbackUrl": "https://webya.ir"
] as [String : Any]

let postData = JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://api.neginpardakht.ir/v1/transaction/request")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "POST"
request.allHTTPHeaderFields = headers
request.httpBody = postData as Data

let session = URLSession.shared
let dataTask = session.dataTask(with: request as URLRequest, completionHandler: { (data, response, error) -> Void in
  if (error != nil) {
    print(error)
  } else {
    let httpResponse = response as? HTTPURLResponse
    print(httpResponse)
  }
})

dataTask.resume()
