import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";
import { TbPremiumRights } from "react-icons/tb";
import { FaFileCode, FaFileDownload } from 'react-icons/fa';
import  './CourseSummary.css'

const CourseSummary = () => {
    const courseSummary = useLoaderData();
    const {title, price, image_url, id, details, author, hours} = courseSummary;

    const ref = React.createRef();
     const options = {
        orientation: "portrait",
        unit: "in",
        format: [22, 20],
    };
    
    return (
        <div className='my-4'>   
            <Card className='container-sm card mx-auto ' >
                <Card.Header className='fs-4 fw-bold text-center'>{title}</Card.Header>
                <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title className='fs-4 fw-bold'>{title}</Card.Title>
                <Card.Text>
                    <hr></hr>
                    <p className='text-center fw-semibold'>Courser Details</p>
                    <hr></hr>
                </Card.Text>
                <Card.Text>
                    {details.slice(100,1500) + '...'}
                </Card.Text>
                <Card.Text>
                <>
                <Pdf
                targetRef={ref}
                filename='course-details.pdf'
                options={options}
                x={0.5}
                y={0.5}
                scale={1}
                >
                {({ toPdf }) => (            
                    <FaFileCode onClick={toPdf} className="display-5 text-primary"/>
                )}
                </Pdf>
                </>
                </Card.Text>
                <Link to={`/checkout/${id}`}>
                    <Button variant="primary">Get Premium Access<TbPremiumRights className='ms-2'></TbPremiumRights> </Button>
                </Link>
            </Card.Body>
            </Card>
        </div>
    );
};

export default CourseSummary;