import React from "react";
import { Form, Button } from "react-bootstrap";

import TitleField from "./TitleField";
import DescriptionField from "./DescriptionField";
import AddressField from "./AddressField";
import SizePriceField from "./SizePriceField";
import DatesField from "./DatesField";
import PropertiesCheckbox from "./PropertiesCheckbox";
import UploadButton from "./UploadButton";

export default function NewRoomForm(props) {

  const handleSubmit = event => {
    event.preventDefault()
    const target = event.target
    console.log(target.name);
  }

  const handleInput = () => {

  }

  return (
    <div className="form__card" >
      <Form onSubmit={handleSubmit} >
        <TitleField onChange={handleInput} />
        <DescriptionField onChange={handleInput} />
        <AddressField /> 
        <SizePriceField onChange={handleInput} />
        <DatesField />
        <PropertiesCheckbox onChange={handleInput} />
        <UploadButton />
        <Button variant="primary" type="submit" >Create Room</Button>
      </Form>
    </div>
  )
}