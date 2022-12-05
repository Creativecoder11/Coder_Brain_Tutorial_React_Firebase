import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Blog = () => {
  return (
    <section className="container mx-auto py-5">
      <h1 className="mb-2 text-center">Blog</h1>

      <div className='container my-5 py-4' style={{ width: '25rem' }}>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is CORS?</Accordion.Header>
            <Accordion.Body>
              Cross-Origin Resource Sharing (CORS) is an HTTP-header based
              mechanism that allows a server to indicate any origins (domain,
              scheme, or port) other than its own from which a browser should
              permit loading resources.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Why are you using firebase? What other options do you have to
              implement authentication?
            </Accordion.Header>
            <Accordion.Body>
              Firebase Authentication provides backend services, easy-to-use
              SDKs, and ready-made UI libraries to authenticate users to your
              app. It supports authentication using passwords, phone numbers,
              popular federated identity providers like Google, Facebook and
              Twitter, and more.
              <br></br>
              Usually, authentication by a server entails the use of a user name
              and password. Other ways to authenticate can be through cards,
              retina scans, voice recognition, and fingerprints.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              How does the private route work?
            </Accordion.Header>
            <Accordion.Body>
              The private route component is similar to the public route, the
              only change is that redirect URL and authenticate condition. If
              the user is not authenticated he will be redirected to the login
              page and the user can only access the authenticated routes If he
              is authenticated (Logged in).
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              What is Node? How does Node work?
            </Accordion.Header>
            <Accordion.Body>
              It is a used as backend service where javascript works on the
              server-side of the application. This way javascript is used on
              both frontend and backend. Node. js runs on chrome v8 engine which
              converts javascript code into machine code, it is highly scalable,
              lightweight, fast, and data-intensive. Working of Node.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  );
};

export default Blog;
