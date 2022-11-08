import React from 'react';

const Blog = () => {
    return (
        <div className='p-5 '>
            <h4>1. Difference between SQL and NoSQL?</h4>
            <div>
                <p><span className='fw-bold'>SQL</span> <br /> (i) SQL databases are primarily called RDBMS or Relational Databases <br /> (ii)Traditional RDBMS uses SQL syntax and queries to analyze and get the data for further insights. They are used for OLAP systems. <br /> (iii) Structured query language (SQL) <br /> (iv) SQL databases are table based databases <br /> (v) SQL databases have a predefined schema <br /> (vi) SQL databases are vertically scalable <br /> (vii) SQL databases are not suitable for hierarchical data storage. <br /> (viii) These databases are best suited for complex queries <br /> (ix)It should be used when data validity is super important <br /> (x) Cross-platform support, Secure and free <br /> (xi) ACID( Atomicity, Consistency, Isolation, and Durability) is a standard for RDBMS <br /> (xii) Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc <br /> <br /> </p>


                <p><span className='fw-bold'>NOSQL</span> <br /> (i) NoSQL databases are primarily called as Non-relational or distributed database <br /> (ii)NoSQL database system consists of various kind of database technologies. These databases were developed in response to the demands presented for the development of the modern application. <br /> (iii) No declarative query language <br /> (iv) NoSQL databases can be document based, key-value pairs, graph databases <br /> (v) NoSQL databases use dynamic schema for unstructured data. <br /> (vi) NoSQL databases are horizontally scalable <br /> (vii) More suitable for the hierarchical data store as it supports key-value pair method. <br /> (viii) These databases are not so good for complex queries <br /> (ix)Use when it’s more important to have fast data than correct data <br /> (x) Easy to use, High performance, and Flexible tool. <br /> (xi) Base (Basically Available, Soft state, Eventually Consistent) is a model of many NoSQL systems <br /> (xii) Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc <br /> <br /> </p>
            </div>
            <br />

            <h4>2. What is JWT, and how does it work?</h4>
            <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. <br /> <br /> JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.The JWT is divided into three parts- Header, Payload, and Signature. <br /> <br /> <span className='fw-bold'>Header :</span> The header is the part that identifies which algorithm is being used to generate the signature. It usually consists of two parts, the type of the token, which is JWT, and the hashing algorithm, like HMAC-SHA256.
                <br /> <br /> <span className='fw-bold'>Payload :</span> The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others
                <br /> <br />
                <span className='fw-bold'>Signature :</span>
                The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature. The signature is the part that securely validates the token. The encoded header(Base64url) is concatenated with the encoded payload(Base64url) and then signed by hashed with the algorithm already mentioned in the header with the secret-key only known to the issuer. Then this whole string is again encoded with Base64url to obtain the final signature.Since the secret key is only available to the issuer, only it can issue new tokens with a valid signature. Thus, the signature ensures that the token hasn’t been altered.
                <br /> <br />
                Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.
                User sign-in using username and password or google/facebook.
                Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.
                User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.
                Resource server then verifies the authenticity of the token using the secret salt/ public key.
            </p>
            <br />

            <h4>3. What is the difference between javascript and NodeJS?</h4>
            <div>
                <p><span className='fw-bold'>JavaScript</span> <br /> (i) It is an open-source, cross-platform, interpreted, lightweight scripting programming language that is used to develop dynamic and web applications. <br /> (ii)It is a programming language. It works in any browser that has a proper browser engine. <br /> (iii) It is generally used on the client-side server. <br /> (iv) All the JavaScript is not important to the node community. <br /> (v) JavaScript can be run on any engine, including Spider Monkey, V8, and JavaScript Core. <br /> (vi) It is designed to build network-centric applications. <br /> (vii) It's a newer version of the ECMA script that runs on Chrome's V8 engine, which is written in C++. <br /> (viii) Few JavaScript frameworks are TypedJS, RamdaJS, etc. <br /> (ix)Various companies use JavaScript like Google, Shopify, Udacity, Sendgrid, Groupon, Okta, Instacart, etc. <br /> (x) Javascript can only be run in the browsers. </p>

                <p><span className='fw-bold'>Node JS</span> <br /> (i) It is a cross-platform, open-source JavaScript runtime environment that allows JavaScript to be run on the server. <br /> (ii)It's a JavaScript interpreter and environment with some valuable libraries that JavaScript programming can use separately. <br /> (iii) It is generally used on the server-side. <br /> (iv) All node projects represent the JavaScript community. <br /> (v) Node JS is only supported by the V8 engine, which Google Chrome mostly uses. Any JavaScript program written with Node JS will always be run in the V8 engine. <br /> (vi) It's designed for data-intensive real-time applications that run on several platforms. <br /> (vii) It uses C, C++, and JavaScript. <br /> (viii) Lodash, express are examples of Nodejs modules. These all modules are to be imported from npm. <br /> (ix) Various companies use Node Js like Netflix, Hapi, Walmart, Paypal, Linkedin, Trello, Medium, eBay, etc. <br /> (x) We can run Javascript outside the browser with the help of NodeJS.</p>

                <p>JavaScript is a widely-used programming language that almost every web application developer uses. It is very simple to locate a resource on the subject to work on JavaScript and do some basic development. Node JS is a JavaScript library extension, but it includes certain undefined utilities, such as non-blocking operating system operation, which is often critical for meeting company objectives. It may also be shown to the user who has signed in from a different system for security purposes.</p>
            </div>
            <br />

            <h4>4. How does NodeJS handle multiple requests at the same time?</h4>
            <p>
                We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded.
                <br /> <br />
                If NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. <br />
                The web server would have multiple threads and when concurrent requests get to the webserver, the webserver picks threadOne from the threadPool and threadOne processes requestOne and responds to clientOne and when the second request comes in, the web server picks up the second thread from the threadPool and picks up requestTwo and processes it and responds to clientTwo. threadOne is responsible for all kinds of operations that requestOne demanded including doing any blocking IO operations.

                The fact that the thread needs to wait for blocking IO operations is what makes it inefficient. With this kind of a model, the webserver is only able to serve as much requests as there are threads in the thread pool.
                  
                NodeJS Web Server maintains a limited Thread Pool to provide services to client requests. Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue .
                NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded. In other words, EventLoop is the listener for the EventQueue.
                So, we have an event queue where the requests are being placed and we have an event loop listening to these requests in the event queue.
                The listener(the event loop) processes the request and if it is able to process the request without needing any blocking IO operations, then the event loop would itself process the request and sends the response back to the client by itself. <br /> <br />

                If the current request uses blocking IO operations, the event loop sees whether there are threads available in the thread pool, picks up one thread from the thread pool and assigns the particular request to the picked thread. That thread does the blocking IO operations and sends the response back to the event loop and once the response gets to the event loop, the event loop sends the response back to the client.

                With traditional multithreaded request/response model, every client gets a different thread where as with NodeJS, the simpler request are all handled directly by the EventLoop. This is an optimization of thread pool resources and there is no overhead of creating the threads for every client request.
            </p>


        </div>
    );
};

export default Blog;