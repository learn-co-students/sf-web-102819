# [Rack & The Internet](https://www.youtube.com/watch?v=yQIJuu3N5EY)

## The Internet
* [ARPANET](https://en.wikipedia.org/wiki/ARPANET)
    * The first computer network implementing TCP/IP
    * The basis for the Internet
* [`lo`](https://www.cs.ucla.edu/the-day-the-infant-internet-uttered-its-first-words/)
    * The first message on the Internet
    * UCLA 1969
* Network Packets
    * "A formatted unit of data" i.e. an atom of Internet information 
    * All information transfered on Internet composed of packets
* The World Wide Web
    * [Information Management: A Proposal](http://info.cern.ch/Proposal.html)
    * [The world's first website](http://info.cern.ch/hypertext/WWW/TheProject.html)
    * HTTP + URIs + HTML
    * Everything on the Web is just text
* [*What happens when you type something into the address bar and press enter?*](https://medium.com/@maneesha.wijesinghe1/what-happens-when-you-type-an-url-in-the-browser-and-press-enter-bb0aa2449c1a)
    * Make request of server corresponding to domain
    * Request-Response Lifecycle
* See [What is the Internet?](https://www.youtube.com/watch?v=Dxcc6ycZ73M)

## Servers & Clients
* *What is a server? What is a client? What do we call the exchange between them?*
* Servers
    * Computers that serve web pages (RRL)
    * Domain names, IP addresses
    * Process requests, make responses
* Clients
    * Us, or, more accurately, our browers
    * Make requests, process responses
* Request-Response Lifecycle

## URLs, Domain Names, IP Addresses, Resources
* Uniform Resource Locator/Identifier
    * Protocol (`http`)
    * Domain (`wikipedia.org`)
    * Resource (`/wiki/ARPANET`)
* Domain names
    * Represent IP addressses
    * `dig google.com`
* IP addresses
    * Everything has an IP address
    * [Domain Name System servers](https://root-servers.org/) map URLs to IP addresses
    * `nslookup google.com`
* What do routers do?
    * Route!
    * `traceroute google.com`
* See requests being made by browser in devtools
* See [IP Addresses & DNS](https://www.youtube.com/watch?v=5o8CwafCxnU)

## What does a browser do?
Tools:
* `ping`
    * Packet INternet Groper
    * Checks and measures connectivity between source and destination 
* `nslookup`
    * Name Server LOOKUP
    * Performs DNS lookups
* `traceroute`
    * TRACE ROUTE
    * Shows the route and time of transit of packets
* `curl`
    * Transfer data to/from a server

## Request/Response Cycle
* HTTP request methods and Resource
    * See: [Mozilla Developer's Network](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
        * `GET`: gimme some info
            * `curl http://www.google.com`
            * Postman
            * "View page source"
        * `POST`: here's some info, process it and respond
        * Only `GET` and `POST` are supported everywhere 
    * "Stateless"
        * No interaction between different requests
        * Response only to individual request
    * Resource
        * After the `/` 
* CRUD
* Status codes
    * Tell us what happened!
    * [HTTP Cats](https://http.cat/)
    * *What HTTP request would trigger a ###?*
    * 100: Info
    * 200: Okay!
    * 300: Redirect
    * 400: Client errors (your bad)
    * 500: Server errors (their bad)
    * See: Network tab of devtools

## [Rack](https://rack.github.io/)
* Request-response server gem
* We don't really know how it works, and that's okay!
* `shotgun`

## Static vs. Dynamic Sites

## Granularity of Concern
* Convention > Configuration
* Trade freedom for efficiency (e.g. literally write the HTML as a string)
* BONUS: [Packets, Routing, & Reliability](https://www.youtube.com/watch?v=AYdF7b3nMto)