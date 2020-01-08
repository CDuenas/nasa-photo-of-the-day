import React, { useState, useEffect } from "react";
import axios from "axios";
import NasaCard from "./NasaCard";
import { Container, Row } from "reactstrap";


export default function Data() {
    const [nasaData, setNasaData] = useState([]);

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=Ov1Qc0bmITOPEQfKt8U9Mko1vzbK1DDPq6nGg8iv`)
        .then(response => {
            setNasaData(response.data);
            // const dataArray = Object.values(response.data)
            // console.log(dataArray);
        })
        .catch(error => {
            console.log("The data was not returned", error);
        });
    }, []);
    const dataArray = Object.keys(nasaData).map(i => nasaData[i])
    console.log(dataArray);
    
    return (
        <Container className="data">
            <Row>
                <NasaCard 
                    key={'1'}
                    title = {dataArray[6]}
                    description = {dataArray[2]}
                    image = {dataArray[7]}
                    />
            </Row>
        </Container>
    );
}