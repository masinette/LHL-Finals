import React, { useState, useContext, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router"

import TitleField from "./TitleField";
import DescriptionField from "./DescriptionField";
import AddressField from "./AddressField";
import SizePriceField from "./SizePriceField";
import DatesField from "./DatesField";
import PropertiesCheckbox from "./PropertiesCheckbox";
import UploadButton from "./UploadButton";
import "./NewRoomForm.scss"

import { UserContext } from "../../UserContext";


export default function NewRoomForm(props) {
  const {user, setUser} = useContext(UserContext)
  const history = useHistory()

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    room_size: 0,
    price: 0,
    start_date: "",
    end_date: "",
    address: "",
    latitude: 0,
    longitude: 0,
    is_pet_friendly: false,
    has_heating: false,
    has_parking: false,
    has_private_bath: false,
    city_id: 1,
    user_id: user.id
  })

  // const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault()
    axios({
      method: "POST",
      url: "/api/rooms",
      data: formData
    })
      .then((res) => {
        console.log(res);
        event.target.reset();
        history.push("/users");
      })
      .catch(err => console.error("Submit Error: ", err))
  }

  const handleInput = (e) => {
    const target = e.target;
    const value = (target.type === "checkbox") ? target.checked : target.value;
    console.log(target.name)
    console.log(target.value)
    setFormData({...formData,
      [target.name]: value
    })
  }

  const handleCancel = () => {
    history.push("/users");
  }

  return (
    <>
      <div className="form__card" >
        <Form onSubmit={handleSubmit} className="form-card" >
          <TitleField handleInput={handleInput} formData={formData} />
          <DescriptionField handleInput={handleInput} formData={formData} />
          <Form.Label>Address</Form.Label>
          <AddressField handleInput={handleInput} setFormData={setFormData} formData={formData} /> 
          <SizePriceField handleInput={handleInput} formData={formData} />
          <DatesField handleInput={handleInput} formData={formData} />
          <PropertiesCheckbox handleInput={handleInput} formData={formData} />
          <div>
          <UploadButton />
          </div>
          <div className="btn-pos" >
            <Button className="room-btn-spacing" variant="primary" type="submit" >Create Room</Button>
            <Button className="room-btn-spacing" onClick={handleCancel} variant="secondary" >Cancel</Button>
          </div>
        </Form>
      </div>
    </>
  )
}