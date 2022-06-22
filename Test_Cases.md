curl -X POST http://localhost:3000
Method: POST

curl --request DELETE http://localhost:3000
Method: DELETE

curl -H "Type: Header" http://127.0.0.1:3000
Method: GET
Headers must contain {ci"Type": "Header"}

curl -H "Type: Header" http://127.0.0.1:3000/a/b/c
Method: GET
Headers must contain {ci"Type": "Header"}
Path: a/b/c






curl -

ci=case insensitive string