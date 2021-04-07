import { Button, Col, Form, Row } from 'react-bootstrap';

function BaseForm() {
  return (
    <div className="mt-3">
      <Row>
        <Col>
          <h3>Tambah Data</h3>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Nama Makanan</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Mie ayam ceker"
              />
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                placeholder="Contoh: mie ayam level pedas"
                rows={3}
              />
            </Form.Group>

            <Form.Group controlId="price">
              <Form.Label>Harga Makanan</Form.Label>
              <Form.Control type="number" name="price" placeholder={0} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default BaseForm;
