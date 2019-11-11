# APIs, or "Hashes + the Internet"

## Goals 🦁

- [ ] Survey how the Internet works 🧭
- [ ] Practice using an API 🧱
- [ ] Build a CLI 📮

## How the Internet Works 🧭

- The request-response lifecycle
  - Request from client to server
  - Response from server to client
- The client and the request
  - HTTP Verbs
  - Request Header
- The server and the response
  - Headers
  - Body
- Response types
  - HTML
  - JSON

## APIs 🧱

- Application Programming Interface (API)
  - A general connectivity interface to an application (e.g. a butler)
  - A standardized means of interaction
- "RESTful" API
  - REpresentational State Transfer
  - HTTP requests GET, PUT, POST, and DELETE data in accordance with resource paths
- The uses of an API on the Internet
  - Easy, up-to-date access to information
  - Connecting LEGOs
- The difference between using an API and scraping
  - API: information is organized and packaged for sharing
  - Scraping: ore vs. ingots
- Making requests to an API and parsing, examining the result
- Writing a command line application (CLI)

## Building a CLI 📮

- [ ] Use the `rest-client` gem to make a request to the [Google Books API])(https://developers.google.com/books/docs/v1/using) with a given query
  - `RestClient.get`
  - `JSON.parse`
- [ ] Parse the response to find the title, author, and description of each book
  - Identify valuable key
  - Map array
- [ ] Convert the hard-coded query into an interactive CLI query
  - `gets#chomp`
  - Plug into query

## Takeaways 🐋

- The Internet is the ebb and flow of requests and and requests between clients and servers.
- APIs serve as an interface between two different software programs.
- A CLI is a text-based interface for a program.

## Resources 💎

1. [Postman](https://www.getpostman.com/)
2. [`rest-client` gem](https://github.com/rest-client/rest-client#usage-raw-url)
3. [Google Books API docs](https://developers.google.com/books/docs/v1/using#WorkingVolumes)
4. [`json` gem](https://ruby-doc.org/stdlib-2.0.0/libdoc/json/rdoc/JSON.html#method-i-parse)
