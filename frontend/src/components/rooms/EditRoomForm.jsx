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
    roomSize: null,
    price: 0,
    startDate: "",
    endDate: "",
    address: "",
    latitude: null,
    longitude: null,
    isPetFriendly: false,
    city_id: 1,
    user_id: 1
  })
  const [search, setSearch] = useState("");

  const {roomId} = useParams();

  useEffect(() => {
    axios({
      method: "GET",
      url: `api/rooms/${roomId}`
    })
      .then(({data}) => console.log(`room ${roomId}:`, data))
  }, [])

  const handleSubmit = event => {

    event.preventDefault()
    axios({
      method: "PUT",
      url: "/api/rooms",
      data: formData
    })
      .then((res) => {
        console.log(res)
        event.target.reset();
        setSearch("");
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
      <Form onSubmit={handleSubmit} >
        <TitleField handleInput={handleInput} />
        <DescriptionField handleInput={handleInput} />
        <AddressField handleInput={handleInput} setFormData={setFormData} formData={formData} setSearch={setSearch} search={search} /> 
        <SizePriceField handleInput={handleInput} />
        <DatesField handleInput={handleInput} />
        <PropertiesCheckbox handleInput={handleInput} />
        <UploadButton />
        <Button variant="primary" type="submit" >Create Room</Button>
      </Form>
    </>
  )
}