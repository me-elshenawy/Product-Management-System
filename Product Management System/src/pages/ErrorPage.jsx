import React from 'react';
import { useRouteError } from 'react-router-dom';
import { Container, Alert } from 'react-bootstrap';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <Container className="p-5 my-5 text-center">
            <Alert variant="danger">
                <Alert.Heading>Oops!</Alert.Heading>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </Alert>
        </Container>
    );
}