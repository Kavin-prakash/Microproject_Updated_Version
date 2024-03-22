import React, { useState } from "react";
import { Button, Card, CardBody, Container, Form } from "react-bootstrap";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';


const initialValues = {
  id: "",
  petAccesoryName: "",
  petAccessoryPrice: "",
  petAccessoryDescription: "",
  accessoryImage: null,
};

function UpdatePetAccessory() {
  const [values, setValues] = useState(initialValues);

  const handleInput = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setValues({
      ...values,
      accessoryImage: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      if (key !== "id") {
        formData.append(key, value);
      }
    });

    try {
      const response = await axios.put(
        `http://localhost:5066/api/OnlinePetShop/UpdatePetAccessory/${values.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      window.alert("Updated successfully");
      console.log("Updated successfully:", response.data);

    
    } catch (error) {
      console.error("Update failure:", error);
    }
  };

  return (
    <Container>
      <Card>
        <CardBody>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>ID:</Form.Label>
              <Form.Control
                type="text"
                name="id"
                value={values.id}
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Accessory Name:</Form.Label>
              <Form.Control
                type="text"
                name="petAccesoryName"
                value={values.petAccesoryName}
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Price:</Form.Label>
              <Form.Control
                type="number"
                name="petAccessoryPrice"
                value={values.petAccessoryPrice}
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description:</Form.Label>
              <Form.Control
                type="text"
                name="petAccessoryDescription"
                value={values.petAccessoryDescription}
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Profile Image:</Form.Label>
              <Form.Control
                type="file"
                name="accessoryImage"
                accept="image/*"
                onChange={handleImageChange}
              />
            </Form.Group>

            <Button type="submit">Update</Button>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
}

export default UpdatePetAccessory;
