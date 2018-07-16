import React from "react";
import API from "./../utils/API";
import { FormGroup, ControlLabel, Button, FormControl } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import { ArticleListItem, ArticleList } from "./ArticleList";
import SaveButton from "./SaveButton";
import Form from "./Form";


class Saved extends React.Component {
    render () {
        return (
            <h1>Saved Articles</h1>
        )
    }
}

export default Saved;