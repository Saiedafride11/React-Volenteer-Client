import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
const axios = require('axios').default;

const AddEvent = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null)

    const onSubmit = data => {
        // console.log(data);
        const eventData = {
            name: data.name,
            imageURL: imageURL
        }
        const url = `http://localhost:5000/addEvent`;
        console.log(eventData)

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => {
            console.log('Server Side', res)
        })
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0])

        const imageData = new FormData();
        imageData.set('key', 'e866112b4fec193b5b8fbbb8e5689224')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', 
            imageData)
          .then(function (response) {
            // console.log(response.data.data.display_url);
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });

    }
  
    console.log(watch("example")); 
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue="New Event" {...register("name")} />
            <br />
            <input type="file" onChange={handleImageUpload} />
            <br />
            {/* <input {...register("exampleRequired", { required: true })} />
            {errors.exampleRequired && <span>This field is required</span>}
            <br /> */}
            <input type="submit" />
            </form>
        </div>
    );
};

export default AddEvent;