import React from "react";
import { Container } from "react-bootstrap";
import BlogList from "../../components/blog/blog-list";
import "./styles.css";
import { useEffect, useState } from "react";

const Home = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const fetchBlogs = async () => {
    try {
      const response = await fetch("http://localhost:3005/blogs")
      if (response.ok) {
        const result = await response.json()
        setData(result)
        setLoading(false)
      } else {
        throw new Error("Fetching Failed!")
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchBlogs()
  }, [])
  return (
    <Container fluid="sm" >
      <h1 className="blog-main-title">Welcome to the Strive Blog!</h1>
      <BlogList posts={data} />
      {
        loading && <h1>Loading...</h1>
      }
    </Container>
  );
}

export default Home
