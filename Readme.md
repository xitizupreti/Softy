Here's a breakdown of the code:

1.  Import necessary modules: `http`, `fs`, and `path`.
2.  Define the hostname and port for the server to listen on.
3.  Create a server using `http.createServer()` method.
4.  Handle incoming requests using a callback function that takes `req` (request) and `res` (response) as parameters.
5.  Check the method of the request. If it's a GET request:
    - Determine the file URL requested (`req.url`).
    - Set the file path (`filePath`) based on the requested URL.
    - Check the file extension (`fileExt`) to ensure it's an HTML file.
    - If the file exists, serve it with a 200 status code. Otherwise, return a 404 error.
6.  If the request method is not GET, return a 404 error.
7.  Start the server by calling `server.listen()` method with the specified port and hostname.
8.  Log a message indicating that the server is running.
