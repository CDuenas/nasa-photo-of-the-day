import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const NasaCard = props => {
    return (
        <Card>
            <CardBody className="card-body">
                <CardTitle>Title: {props.title}</CardTitle>
                <img width="100%" src={props.image} alt="Card image" />
                <CardText>{props.description}</CardText>
            </CardBody>
        </Card>
    )
}







export default NasaCard;