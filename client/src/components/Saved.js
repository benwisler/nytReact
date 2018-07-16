import React from "react";
import API from "./../utils/API";
import { ArticleListItem, ArticleList } from "./ArticleList";
import DeleteButton from "./DeleteButton";
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
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "2-digit", minute:"2-digit", second: "2-digit" };
        return (
            <div>
            <Header/>
            <div id="savedDiv">
            <h1>Saved Articles</h1>
            </div>
            <br/>
            <ArticleList>
            {this.state.articles.map(article => {
              return (
                <ArticleListItem key={article._id}>
                <strong>
                  <h1>{article.title}</h1>
                  <a href={article.url}>{article.url}</a>
                  <h3>{new Date(article.date).toLocaleDateString("en-US", options)}</h3>
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