import axios from "axios";

const key = "f4b1a253a56d406b91b41dabf145293a"
// const url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=f4b1a253a56d406b91b41dabf145293a"
export default {
  // Gets all books
  getArticles: function(keyword, startDate, endDate) {
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json"
    + "?api-key=f4b1a253a56d406b91b41dabf145293a" + "&q=" + keyword + "&begin_date=" + startDate + "0101&end_date=" + endDate + "0101"
  )
  },
  // Gets the book with the given id
  findAll: function() {
    return axios.get("/api/articles");
  },
  // Deletes the book with the given id
  delete: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a book to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};
