# Authentication
- Take finished code and walk through what we did to get authentication working
- We have 2 applications, how do they work together when it comes to authentication?

- Backend (Setup)
	1. Check user model for `has_secure_password`
	2. Create a user in the rails console
	3. Check routes
	4. Check auth controller
- Frontend (Login)
	1. Check login component
	2. Check api service component
- Backend (Login)
	1. Fill in create method
- Frontend (login/logout/token)
	1. In `App.js` check login methods
	2. Look at history props being passed down to Login component
	3. Look at `Navbar` conditional for login/logout button
	4. We use local storage (memory in the browser) - use userId as the token
	5. In `App`When the component mounts we want to fetch the user from the backend
	6. In `api` component check out `getCurrentUser` method & adding the token to the headers
- Backend (current user token)
	- Check routes for auth show
	- Write show in auth controller
- Frontend (redirect)
	1. In about and paintings container add component did mount and redirect user if not logged in
	2. Explain in `app` how we can redirect for a route as well “/“
	3. In Navbar explain withRouter (we can pass history when we render something via a route but navbar is not rendered that way)
- Backend (jwt)
	1. Check methods written in application controller
	2. Explain JWT (see below)
	3. Install gem `jwt` ([GitHub - jwt/ruby-jwt: A ruby implementation of the RFC 7519 OAuth JSON Web Token (JWT) standard.](https://github.com/jwt/ruby-jwt))
	4. Write 



Explain what jwt (json web token) is (https://jwt.io/) 
	- jwt tokens are just strings (which can be easily sent back and forth in http requests)
	- 3 parts to it
		1. Header: what algorithm they are using to encrypt this stuff
		2. Payload: what we care about,  the user id for instance
		3. Verify signature: it encrypts all the other stuff and it uses a secret to do that (which will be stored in our backend)
		4. Add Figaro gem to use env variables `bundle exec figaro install`

The reason we can’t use cookies is because we have 2 applications running on 2 different domains


Alex’s Gist: [jwt-auth.md · GitHub](https://gist.github.com/alexgriff/414a05a0b6908145f050888e073df7ff)
