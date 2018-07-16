import React from "react";
import API from "./../../utils/API";
import { FormGroup, ControlLabel, Button, FormControl } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import { ArticleListItem, ArticleList } from "./../ArticleList";
import SaveButton from "./../SaveButton";
import Header from "./../Header";
import './style.css'
class Form extends React.Component {
  state = {
    articles: [],
    keyword: "",
    numSearch: 1,
    startYear: "1850", //fix this
    endYear: "2018",
    error: ""
  };

  logChange = val => {
    console.log("Selected: " + val);
  };

  saveArticle = article => {

    API.saveArticle({
      title: article.headline.main,
      date: article.pub_date,
      url: article.web_url,
      saved: true
    }).catch(err => console.log(article.headline.main));
  
  };
  handleFormSubmit = event => {
    event.preventDefault();
    API.getArticles(
      this.state.keyword,
      this.state.startYear,
      this.state.endYear
    )
      .then(res => {
        console.log(res.data.response.docs);
        this.setState({ articles: res.data.response.docs.slice(0, this.state.numSearch) });
      })
      .catch(err => this.setState({ error: err.message }));
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
   changeText = () =>
  {
      if (this.value=="Save") this.value = "Saved";
      else this.value = "Saved";
  }
  
  render() {
    return (
      <div id="bodyID">
        <Header/>
        <form>
          <FormGroup
            controlId="formBasicText"
            name="searchForm"
            id="searchForm"
            // validationState={this.getValidationState()}
          >
            <ControlLabel id="searchParam">Search Term</ControlLabel>
            <FormControl
              type="text"
              name="keyword"
              value={this.state.keyword}
              // placeholder="Enter text"
              onChange={this.handleChange}
            />
            <ControlLabel id="searchParam">Number of Records for Retrieve</ControlLabel>
            <FormControl
              componentClass="select"
              name="numSearch"
              placeholder="select"
              value={this.state.numSearch}
              onChange={this.handleChange}
            >
              <option value={1}>1</option>
              <option value={5}>5</option>
              <option value={10}>10</option>
            </FormControl>

            <ControlLabel id="searchParam">Start Year</ControlLabel>
            <FormControl
              type="text"
              name="startYear"
              value={this.state.startYear} //add month and day option
              // placeholder="Enter text"
              onChange={this.handleChange}
            />
            <ControlLabel id="searchParam">End Year</ControlLabel>
            <FormControl
              type="text"
              name="endYear"
              value={(this.state.endYear)}
              // placeholder="Enter text"
              onChange={this.handleChange}
            />

            <Button
              onClick={this.handleFormSubmit}
              disabled={!this.state.keyword || !this.state.startYear || !this.state.endYear}
            >
              Search
            </Button>
            {/**/}
          </FormGroup>
        </form>
        <Row>
          <Col>
            <ArticleList>
              {this.state.articles.map(article => {
                return (
                  <ArticleListItem id="center" key={article._id}>
                    <strong>
                      <h1>{article.headline.main}</h1>
                      <a href={article.web_url}>{article.web_url}</a>
                      <h3>{article.pub_date}</h3>
                    </strong>
                    <SaveButton onClick={() => 
                      
                      this.saveArticle(article)} />
                    
                  </ArticleListItem>
                  
                );
              })}
            </ArticleList>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Form;
