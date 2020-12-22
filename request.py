import requests

url = "http://127.0.0.1:8000/api/channel"

payload = {}
headers = {
    'Authorization': 'Api-Key HRW8uh7A.69T9W8MDKA8af7T6iMTkx6jKquYtlazc'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text.encode('utf8'))
