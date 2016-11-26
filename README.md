# nodejs-koa
A Node.js/Koa implementation of the Rosetta String

## Rosetta-String Implementation

Each example application must:
- Set a header of `x-powered-by`, with the value set as framework type/language
- Connect to a common PostgreSQL database for string storage
    - Use `DATABASE_URL` connection string
- Expose a web server
    - Runnable via `./bin/www`
- Have an endpoint to declare the server
- Have an endpoint to return a string at random
- Have an endpoint to add a new string
    - This is protected by basic HTTP-Auth
    - Password for basic auth is set by ENV variable
- Have a test suite
    - Runnable via `./bin/test`

## Testing

~~~sh
./bin/test
~~~

## Running

~~~sh
./bin/www
~~~
