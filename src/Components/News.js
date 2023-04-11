import React, {Component} from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from "axios";
import config from "../config";

class News extends Component {
    constructor() {
      super();
      this.state = {
        news: [],                           // Initialize as an empty array
      };
    }
  
    componentDidMount() {
      const apiKey = config.apiKey; 
      const singleNewsUrl = `https://gnews.io/api/v4/search?q=AI&lang=en&country=us&max=10&apikey=${apiKey}`;
      axios.get(singleNewsUrl).then((response) => {
        this.setState({
          news: response.data.articles,       // Store only the articles in state
        });
      });
    }
  
    render() {
      const news = this.state.news;
      if (news.length === 0) {
        return <h1>Loading...</h1>;
      }
      return (
        <Container>
          <Row>
            {news.map((article) => (
              <Col md={4} key={article.url}>
                <Card style={{ marginBottom: "30px" }}>
                  <Card.Img variant="top" src={article.image} alt="AI" />
                  <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Text>{article.description}</Card.Text>
                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      Read More at <i>{article.source.name}</i>
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      );
    }
  }
  
  export default News;