import React, { useState } from "react";
import { Button, Card, CardBody, Container, Form } from "react-bootstrap";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useNavigate } from "react-router-dom";



const initialValues = {
  petName: "",
  petCategory: "",
  petBreed: "",
  petPrice: "",
  petDescription: "",
  petStock: "",
  petImage: null,
};

function UploadPetDetail() {
  const [values, setValues] = useState(initialValues);
//   const Usenavigate = useNavigate();


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
      formData.append(key, value);
    });

    try {
      const response = await axios.post(
        "http://localhost:5066/api/OnlinePetShop/CreatePet",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      window.alert("Posted successfully");
      console.log("Posted successfully:", response.data);
    //   Usenavigate('/postaccessory')
    } catch (error) {
      console.error("Post failure:", error);
    }
  };

  return (
    <Container>
      <Card>
        <CardBody>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>PetName:</Form.Label>
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
              <Form.Label>Price:</Form.Label>
              <Form.Control
                type="number"
                name="petPrice"
                value={values.petPrice}
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Petdescription:</Form.Label>
              <Form.Control
                type="text"
                name="petDescription"
                value={values.petDescription}
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Petstock:</Form.Label>
              <Form.Control
                type="number"
                name="petStock"
                value={values.petStock}
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Profile Image:</Form.Label>
              <Form.Control
                type="file"
                name="petImage"
                accept="image/*"
                onChange={handleImageChange}
              />
            </Form.Group>

            <Button type="submit">Submit</Button>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
}

export default UploadPetDetail;
