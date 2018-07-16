import React from "react";
import API from "./../utils/API";
import { FormGroup, ControlLabel, Button, FormControl } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import { ArticleListItem, ArticleList } from "./ArticleList";
import SaveButton from "./SaveButton";
import Form from "./Form";



class Saved extends React.Component {
    state = {
        articles: []
      };
      loadSaved = () => {
        API.findAll()
          .then(res =>
            this.setState({
              articles: res
            }),
            console.log(this.state)
          )
          .catch(err => console.log(err));
      };
    render () {
        {this.loadSaved}
        return (
            <div>
                
            <h1>Saved Articles</h1>
            {console.log(this.state)}
            {/* <ArticleList>
            {this.state.articles.map(article => {
              return (
                <ArticleListItem key={article._id}>
                <strong>
                  <h1>{article.headline.main}</h1>
                  <h2> {article.web_url}</h2>
                  <h3>{article.pub_date}</h3>
                </strong>
                <SaveButton onClick={() => this.saveArticle(article)} />
              </ArticleListItem>
            );
          })}
        </ArticleList> */}
        </div>
)
}
}

export default Saved;