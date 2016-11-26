# nodejs-koa
A Node.js/Koa implementation of the Rosetta String

## Rosetta-String Implementation

Each example application must:
- Set a header of `x-powered-by`, with the value set as framework type/language
- Connect to a common PostgreSQL database for string storage
    - Use ENV variable `DATABASE_URL` connection string
- Expose a web server
    - Runnable via `./bin/www`
- Have a test suite
    - Runnable via `./bin/test`
- Have an endpoint to declare the server
    - via `GET  /`
- Have an endpoint to return a string at random
    - via `GET  /random`
- Have an endpoint to add a new string
    - via `POST /create`
    - This is protected by basic HTTP-Auth
    - Password for basic auth is set by ENV variable `ROSETTA_PASSWORD`
    - Username for basic auth is `rosetta`
    - Set string/quote as POSTed body value for key `quote_text`

## Testing

~~~sh
./bin/test
~~~

## Running

~~~sh
./bin/www
~~~

## Usage

~~~sh
# Example creation of quote:
curl -i -X POST --url https://rosetta-string-nodejs-koa.herokuapp.com/create \
    --header "Authorization: Basic base64string=" \
    --data "quote_text=Strive for grace, not perfection."

# Example retrieval of quote:
curl -i --url https://rosetta-string-nodejs-koa.herokuapp.com/random
~~~
