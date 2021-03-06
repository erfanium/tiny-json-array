# tiny-json-array

Normal JSON array of objects:

```json
[
  { "id": 1, "email": "george.bluth@reqres.in", "first_name": "George", "last_name": "Bluth", "avatar": "128.jpg" },
  { "id": 2, "email": "janet.weaver@reqres.in", "first_name": "Janet", "last_name": "Weaver", "avatar": "128.jpg" },
  { "id": 3, "email": "emma.wong@reqres.in", "first_name": "Emma", "last_name": "Wong", "avatar": "128.jpg" },
  { "id": 4, "email": "eve.holt@reqres.in", "first_name": "Eve", "last_name": "Holt", "avatar": "128.jpg" },
  { "id": 5, "email": "charles.morris@reqres.in", "first_name": "Charles", "last_name": "Morris", "avatar": "128.jpg" },
  { "id": 6, "email": "tracey.ramos@reqres.in", "first_name": "Tracey", "last_name": "Ramos", "avatar": "128.jpg" },
  { "id": 7, "email": "michael.lawson@reqres.in", "first_name": "Michael", "last_name": "Lawson", "avatar": "128.jpg" },
  { "id": 8, "email": "lindsay.ferguson@reqres.in", "first_name": "Lindsay", "last_name": "Ferguson", "avatar": "128.jpg" },
  { "id": 9, "email": "tobias.funke@reqres.in", "first_name": "Tobias", "last_name": "Funke", "avatar": "128.jpg" },
  { "id": 10, "email": "byron.fields@reqres.in", "first_name": "Byron", "last_name": "Fields", "avatar": "128.jpg" },
  { "id": 11, "email": "george.edwards@reqres.in", "first_name": "George", "last_name": "Edwards", "avatar": "128.jpg" },
  { "id": 12, "email": "rachel.howell@reqres.in", "first_name": "Rachel", "last_name": "Howell", "avatar": "128.jpg" }
]
```
After using Tiny:

```json
[
  ["id", "email", "first_name", "last_name", "avatar"],
  [1, "george.bluth@reqres.in", "George", "Bluth", "128.jpg"],
  [2, "janet.weaver@reqres.in", "Janet", "Weaver", "128.jpg"],
  [3, "emma.wong@reqres.in", "Emma", "Wong", "128.jpg"],
  [4, "eve.holt@reqres.in", "Eve", "Holt", "128.jpg"],
  [5, "charles.morris@reqres.in", "Charles", "Morris", "128.jpg"],
  [6, "tracey.ramos@reqres.in", "Tracey", "Ramos", "128.jpg"],
  [7, "michael.lawson@reqres.in", "Michael", "Lawson", "128.jpg"],
  [8, "lindsay.ferguson@reqres.in", "Lindsay", "Ferguson", "128.jpg"],
  [9, "tobias.funke@reqres.in", "Tobias", "Funke", "128.jpg"],
  [10, "byron.fields@reqres.in", "Byron", "Fields", "128.jpg"],
  [11, "george.edwards@reqres.in", "George", "Edwards", "128.jpg"],
  [12, "rachel.howell@reqres.in", "Rachel", "Howell", "128.jpg"]
]
```