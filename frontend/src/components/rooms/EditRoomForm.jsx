import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

import TitleField from "./TitleField";
import DescriptionField from "./DescriptionField";
import AddressField from "./AddressField";
import SizePriceField from "./SizePriceField";
import DatesField from "./DatesField";
import PropertiesCheckbox from "./PropertiesCheckbox";
import UploadButton from "./UploadButton";
import axios from "axios";
import { useParams } from "react-router";

export default function EditRoomForm(props) {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    room_size: 0,
    price: 0,
    start_date: "",
    end_date: "",
    address: "",
    latitude: null,
    longitude: null,
    is_pet_friendly: false,
    city_id: 1,
    user_id: 1
  })
  const [search, setSearch] = useState("");

  const {roomId} = useParams();

  useEffect(() => {
    axios({
      method: "GET",
      url: `/api/rooms/${roomId}`
    })
      .then(({data}) => {
        console.log(`room ${roomId}:`, data[0])
        setFormData(data[0]);
      }) 
      .catch(err => console.error("error: ", err))
  }, [])

  // const allRooms = props.rooms
  // console.log(allRooms);
  console.log(formData);


  const handleSubmit = event => {
    event.preventDefault()
    axios({
      method: "PUT",
      url: `/api/rooms/${roomId}`,
      data: formData
    })
      .then((res) => {
        console.log(res)
        event.target.reset();
      })
    const target = event.target
    console.log(target.name);
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

  return (
    <>
      <div className="form__card">
        <Form onSubmit={handleSubmit} >
          <TitleField handleInput={handleInput} formData={formData} />
          <DescriptionField handleInput={handleInput} formData={formData} />
          <AddressField handleInput={handleInput} setFormData={setFormData} formData={formData} /> 
          <SizePriceField handleInput={handleInput} formData={formData} />
          <DatesField handleInput={handleInput} formData={formData} />
          <PropertiesCheckbox handleInput={handleInput} formData={formData} />
          <UploadButton />
          <Button variant="primary" type="submit" >Create Room</Button>
        </Form>
      </div>
    </>
  )
}