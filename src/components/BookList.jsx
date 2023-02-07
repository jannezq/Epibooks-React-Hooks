// import { Component } from 'react'
import SingleBook from './SingleBook'
import { Col, Form, Row } from 'react-bootstrap'
import CommentArea from './CommentArea'
import { useState } from 'react'

const BookList = (props) => {
  
  const [selectedBook, setSelectedBook] = useState(null)

  const [searchQuery, setSearchQuery] = useState("")

  // changeSelectedBook = (asin) => {
  //   this.setState({
  //     selectedBook: asin,
  //   })
  // }
  const bookId = (id) =>{
    setSelectedBook(id)
  }


    return (
      <>
      
        <Row>
          <Col md={8}>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Search a book</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Search here"
                    value={searchQuery}
                    onChange={(e) =>{
                      setSearchQuery(e.target.value )
                    }
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              {props.books
                .filter((b) =>
                  b.title.toLowerCase().includes(searchQuery)
                )
                .map((b) => (
                  <Col xs={12} md={4} key={b.asin}>
                    <SingleBook
                      book={b}
                      sendBookId={bookId} selected={b.asin === selectedBook}
                    />
                  </Col>
                ))}
            </Row>
          </Col>
          <Col md={4}>
            <CommentArea asin={selectedBook} />
          </Col>
        </Row>
      </>
    )

}

export default BookList
