import React from "react";
import API from "./../utils/API";
import { FormGroup, ControlLabel, Button, FormControl } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import { ArticleListItem, ArticleList } from "./ArticleList";
import DeleteButton from "./DeleteButton";
import Form from "./Form";
import Header from "./Header"


class Saved extends React.Component {
    state = {
        articles: []
      };
      componentDidMount() {
          this.getSaved();

        
    };
    getSaved = () => {
        API.findAll()
		.then(res => {
            console.log(res);
            this.setState({
                articles: res.data
            })
        })
    }
    delete = id => {
        API.delete(id)
        .then(res => this.getSaved())
        .catch(err => console.log(err))
    }

    render () {
        // {this.loadSaved}
        return (
            <div>
            <Header/>
            <h1>Saved Articles</h1>
            <ArticleList>
            {this.state.articles.map(article => {
              return (
                <ArticleListItem key={article._id}>
                <strong>
                  <h1>{article.title}</h1>
                  <h2> {article.url}</h2>
                  <h3>{article.date}</h3>
                </strong>
                <DeleteButton onClick={() => this.delete(article._id)} />
              </ArticleListItem>
            );
          })}
        </ArticleList>
        </div>
)
}
}

export default Saved;