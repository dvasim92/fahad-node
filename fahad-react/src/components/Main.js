import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, FormGroup, Label, Row, Table } from 'reactstrap';
import Input from './Input';

function Main() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: null
  });

  let [users, setUsers] = useState([])

  useEffect(() => {
    userList();
  }, [])

  const handleDelete = async (id) => {
    try {
      const url = `${process.env.REACT_APP_URL}deleteUser/${id}`
      const response = await axios.delete(url)
      setUsers(users.filter(u => u._id != id));
    } catch (error) {
      console.log(error.response.data.msg)
    }
  };

  const registerUser = async (data) => {
    try {
      const url = `${process.env.REACT_APP_URL}register`
      const response = await axios.post(url, data)

      setUsers([...users, response.data.data]);
    } catch (error) {
      console.log(error.response.data.msg)
    }
  };

  const userList = async (data) => {
    try {
      const url = `${process.env.REACT_APP_URL}userList`
      const response = await axios.get(url)
      console.log(response)
      setUsers(response.data.data)
    } catch (error) {
      console.log(error.response.data.msg)
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col md={3}>
            <Input data={formData} setFormData={setFormData} />
            <Button onClick={() => registerUser(formData)}>Clik me</Button>
          </Col>
          <Col md={9}>
            <Table>
              <thead>
                <tr>
                  <td>
                    SrNo.
                  </td>
                  <td>
                    Name
                  </td>
                  <td>
                    Email
                  </td>
                  <td>
                    Age
                  </td>
                  <td>
                    Action
                  </td>
                </tr>
              </thead>
              <tbody>
                {
                  users && users?.length > 0 && users.map((string, index, array) => {
                    return <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{string.name}</td>
                      <td>{string.email}</td>
                      <td>{string.age}</td>
                      <td>
                        <Button color='danger' onClick={(e) => handleDelete(string._id)} className='mx-2'><i className='fa fa-trash-can-arrow-up'></i></Button>
                        <Button color='success'><i className='fa fa-pencil'></i></Button>
                      </td>
                    </tr>
                  })
                }
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Main