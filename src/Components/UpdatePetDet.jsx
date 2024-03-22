import React, { useState } from "react";
import { Button, Card, CardBody, Container, Form } from "react-bootstrap";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';


const initialValues = {
  id: "",
  petName: "",
  petCategory: "",
  petBreed: "",
  petPrice: "",
  petDescription: "",
  petStock: "",
  petImage: null,
};

function UpdatePetDetails() {
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
      petImage: e.target.files[0],
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
        `http://localhost:5066/api/OnlinePetShop/UpdatePet/${values.id}`,
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
              <Form.Label>Pet Name:</Form.Label>
              <Form.Control
                type="text"
                name="petName"
                value={values.petName}
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>PetCategory:</Form.Label>
              <Form.Control
                type="text"
                name="petCategory"
                value={values.petCategory}
                onChange={handleInput}
              />
            </Form.Group>


            <Form.Group className="mb-3">
              <Form.Label>PetBreed:</Form.Label>
              <Form.Control
                type="text"
                name="petBreed"
                value={values.petBreed}
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Pet Price:</Form.Label>
              <Form.Control
                type="number"
                name="petPrice"
                value={values.petPrice}
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Pet Description:</Form.Label>
              <Form.Control
                type="text"
                name="petDescription"
                value={values.petDescription}
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Pet Stock:</Form.Label>
              <Form.Control
                type="text"
                name="petStock"
                value={values.petStock}
                onChange={handleInput}
              />
            </Form.Group>

{/* // */}
            <Form.Group className="mb-3">
              <Form.Label>Profile Image:</Form.Label>
              <Form.Control
                type="file"
                name="petImage"
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

export default UpdatePetDetails;
