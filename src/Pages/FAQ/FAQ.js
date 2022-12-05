import React from "react";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

const FAQ = () => {
  return (
    <div className="container mx-auto py-5">
      <h1 className="mb-5 text-center">Frequently asked question</h1>

      <div className='container my-5 py-5'>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row>
          <Col sm={4}>
            <ListGroup>
              <ListGroup.Item action href="#link1">
                Who will success in this course?
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                What is the modules of course?
              </ListGroup.Item>
              <ListGroup.Item action href="#link3">
                What will need to complete this course professionaly?
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={8} className="mt-3">
            <Tab.Content>
              <Tab.Pane eventKey="#link1">
                <p>
                  Who wants to become a web developer. For those who want to
                  learn web development from scratch and then get a job in a
                  software company as a web developer. For those who don't know
                  much about programming or web development. Even those who have
                  studied CSE for four years and could not decide what to do,
                  did not learn much, they can learn complete web development
                  from this course and apply for jobs.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#link2">
                <p>
                  You can understand that by looking at the course curriculum.
                  But in short, this course has everything you need to become a
                  serious web developer these days. In short, from HTML, CSS to
                  bootstrap, JavaScript, Git, ES6, REST API, server, JSON are
                  there. At the same time, there is a system for making complete
                  websites with React, the framework that currently has the most
                  jobs. In addition, there are many other things including node,
                  database (mongodb), debug, problem solving, interview
                  questions.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#link3">
                <p>
                  First, it takes dedicated time. Mast 6-8 hours per day. 8-10
                  hours if possible (If you can't give time. If you don't want
                  to do hard work, there will be no benefit in enrolling in the
                  course.) Secondly you will need a laptop or a computer (where
                  software like node, Visual Studio Code can be installed) and
                  thirdly you will need minimum 2 - 10 Mbps internet. Broadband
                  is preferred so that the course videos can be viewed well. To
                  become a professional web developer, minimum 4 months of
                  serious hard work should be kept in mind. questions.
                </p>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      </div>
    </div>
  );
};

export default FAQ;
