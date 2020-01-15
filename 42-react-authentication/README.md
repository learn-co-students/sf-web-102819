# Auth with JWT, Rails, and React 🔐

- [ ] Review the difference between Authentication and Authorization 🎭
- [ ] Authenticate via a basic controller action in Rails triggered by a fetch in React 🚪
- [ ] Store user data in state on login/signup 🛢
- [ ] Use localStorage to store token 💽
- [ ] Automatically fetch user information based on contents of localStorage for already logged-in users 🤖

## Authentication vs. Authorization 🎭

### Authentication

- Confirming who you are
- Identity
- Multi-factor (password + phone, email, hardware, Authenticator, Authy)
- Some kind of _proof_

### Authorization

- Deals with permissions
- _Based on_ who you are, what are you allowed to do?
- `current_user` - check role, access level
- "Business logic"
- If you are an admin, you can create a page
- If you are a user, you can post a comment
- Not signed in, you can view a page, but nothing else

## Rails Authentication Review 🛤

### bcrypt

We don't want access to the passwords
Liability - if we have that access, that's dangerous

- password storage (hashed, salted passwords)
  - _hashed_ ('one way' function, can't recover the original value)
  - _salted_ - add random string to the password 'password123' + 'aslkdfjalskdfjkasjdf'
  - protects against Rainbow Table attack

- column `password_digest` instead of password
- `has_secure_password` macro
- password doesn't get stored in plaintext

### /login

- route accepts the username and password
- _authenticate_ - check the username and password
- start a 'session'
- send back a _cookie_ with the session info
- cookie can be used instead of username / password in the future

```ruby
# /login
session[:user_id] = current_user.id # set an encrypted cookie

# later
session[:user_id] # read from the cookie
```

### Authorization Review

- based on the session info
- `before_action :authenticate`
- check whether the user was 'Authorized' to access some resource / perform some action
- either allow or respond with some error
- Gems
  - `Devise`
  - `CanCanCan`

## What's Changed ✨

- Single Page app
- Instead of a form submit, we use `fetch`
- Cookies not automatically included
- _How do we include our authentication when we're using fetch?_

### Token Auth

- Essentials
  - Instead of a session cookie
  - Send back a 'token' as data
  - Plays the same role - authenticate who we are
- Issues
  - How do we generate the token?
  - How do we send it to the client?
  - How do we store it on the client?
  - How do we send it back and read it?

### Token

- String that identifies user
- _Cryptographically Secure_
  - Protection from eavesdropping - no one can read the data
  - Protection from tampering - signed, no one can forge a signature

### JWT

- Format for tokens
- Allows different encryption schemes
- Libraries in different languages for creating them

## Flow 🦦

- User presented with a login form
- Sends the email + password to Rails (`fetch`)
- Rails sends back "token" - contains identifying info
- React includes the token with future requests to prove that it's still the user
- Rails checks the token and authorizes based on that info

### Options for storing the token

- Cookies (how we did it in rails)
  - Don't have the control in our app
- React state - cleared out every time we refresh
- Url in react-router
  - don't do this!!!
  - sharing a link shares someone's identity!
- localStorage
  - be there forever?
    - clear it - on sign out `clear`
    - we would like to be able to expire tokens after a set amount of time
    - 'stay signed in'
    - XSS

### User Experience

#### Logout

- Button in navbar
- Clear localStorage
- Update the state so that it reflects that we are logged out

#### Sign up / Login

- Error messages for invalid email / password, failed token
- Redirect on login

### In Rails with JWT Gem

1. Sign a JWT token in Rails
  -> encode some data
2. Send it to react app (when the react app sends the username and password)
3. React app sends it back (store it, send it with the request)
4. Rails checks validity
  -> because of JWT, we can trust that Rails app originally created the data

- In summary:
  - Rails has a secret key
  - lock some information with that key
  - Send it out, trust that no one else can read it
  - Read it again, trust that no one else can tamper with it

### In React

#### Sign In

1. Login Form
2. Send the username and password
3. Store the token (and user info)
4. Send the token on future requests

#### Already Signed In

1. On mount, check if there is a token
2. If so, fetch user info
3. If not...

## Questions

- How to hide your secret key?
-> env

- Is React State secure?
-> As safe as any other javascript executing in the browser
-> XSS is a big vulnerability :/

- Other attack vectors? Liabilities?
-> Scrub your logs

[Solution](https://github.com/learn-co-curriculum/lectures-starter-code/commit/90a15907615117f961dfc55f9b595143084198fb#diff-3a8884c5b667fda003b25f237e1f300e)
