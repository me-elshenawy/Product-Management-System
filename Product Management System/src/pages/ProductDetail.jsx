import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';

export default function ProductDetail() {
    const { data: product } = useLoaderData();

    return (
        <Container className="p-5 my-5">
            <Card className="shadow-sm">
                <Card.Header as="h2" className="text-center">{product.name}</Card.Header>
                <Card.Body>
                    <Card.Text><strong>ID:</strong> {product.id}</Card.Text>
                    <Card.Text><strong>Price:</strong> ${parseFloat(product.price).toFixed(2)}</Card.Text>
                    <Card.Text><strong>Quantity:</strong> {product.quantity}</Card.Text>
                    <Card.Text><strong>Category:</strong> {product.category}</Card.Text>
                    <Card.Text><strong>Free Shipping:</strong> {product.shipping ? 'Yes' : 'No'}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                    <Button as={Link} to={`/${product.id}/edit`} variant="primary" className="me-2">
                        Edit
                    </Button>
                    <Button as={Link} to="/" variant="secondary">
                        Back to List
                    </Button>
                </Card.Footer>
            </Card>
        </Container>
    );
}