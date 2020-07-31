# Deno REST API
A simple CRUD REST API example using Deno and Oak

## Run Locally
```
deno run --allow-net server.ts
```

# Endpoints

Get All Products
```
GET      /products
```

Get a single Products by Id
```
GET      /products/:id
```

Create a new products
```
POST     /products
```

Update an existing Products by Id
```
PUT      /products/:id
```

Delete an existing Products by Id
```
DELETE   /products/:id
```