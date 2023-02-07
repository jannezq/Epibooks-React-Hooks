// import { Component } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'
import { useState, useEffect } from 'react'

const CommentArea = (props) => {

  const [commentsObj, setCommentsObj] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)



  // componentDidMount = async () => {
  //   try {
  //     let response = await fetch(
  //       'https://striveschool-api.herokuapp.com/api/comments/' +
  //         this.props.asin,
  //       {
  //         headers: {
  //           Authorization: ' your-auth-token-goes-here',
  //         },
  //       }
  //     )
  //     console.log(response)
  //     if (response.ok) {
  //       let comments = await response.json()
  //       this.setState({ comments: comments, isLoading: false, isError: false })
  //     } else {
  //       console.log('error')
  //       this.setState({ isLoading: false, isError: true })
  //     }
  //   } catch (error) {
  //     console.log(error)
  //     this.setState({ isLoading: false, isError: true })
  //   }
  // }

  const fetchComments = async () =>{

      try {
        let response = await fetch(
          'https://striveschool-api.herokuapp.com/api/comments/' +
            props.asin,
          {
            headers: {
              Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RiYjZlMTUwMWZlODAwMTU2MGMyMjIiLCJpYXQiOjE2NzUzNDM1ODYsImV4cCI6MTY3NjU1MzE4Nn0.Yw4QgVfOVXsvwAmz1kLZkHw2gXs7Exzf85QVQXGT1oc",
            },
          }
        )
        console.log(response)
        if (response.ok) {
          let comments = response.json()
          setCommentsObj(comments)
          setIsLoading(false)
          setIsError(true)
          
        } else {
          console.log('error')
          setIsLoading(false)
          setIsError(true)
        }
      } catch (error) {
        console.log(error)
        setIsLoading(false)
        setIsError(true)
      }
    
  }
  
  // componentDidUpdate = async (prevProps) => {
    
  // }

  useEffect(() => {
    fetchComments()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [] )



    return (
      <div className="text-center">
        {isLoading && <Loading />}
        {isError && <Error />}
        <AddComment asin={props.asin} />
        <CommentList commentsToShow={commentsObj} />
      </div>
    )
}

export default CommentArea
