---
sidebar_position: 3
---

# Mock HTTP Requests

AthenaJS includes fetch-mock integration, for a detailed look into how the fetch-mock library works, check out their documentation <a href = 'https://www.wheresrhys.co.uk/fetch-mock/#aboutintroduction'> here </a>.

### When to use this feature

If your component uses the 'Fetch' method to GET, POST, DELETE, etc... data from a backend, Web API or some other source, you can use the Mock Server tab in the 'Edit Component' window to mock the response.  By default, we set up the mock server to intercept all requests and respond with the object {data: 'mock data'}. Check out the documentation linked above if you you want to learn how to configure your 'Mock server' in more detail.