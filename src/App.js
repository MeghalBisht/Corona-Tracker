import React, { useEffect, useState } from 'react';
import MyMap from './Comp/MyMap';
import MyInfo from './Comp/MyInfo';
import Footer from './Comp/Footer';
import Pagination from './Comp/Pagination';
import './App.css';

function App() {

  const [loading,setLoading] = useState(false)
  const [data, setData] = useState([])
  const [error, setError] = useState(false)
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })

  useEffect(() => {

    async function asyncData() {
      try {
        setLoading(true)
        const response = await fetch(`https://www.trackcorona.live/api/countries`)
        const resdata = await response.json()
        setData(resdata.data)
        setLoading(false)
        console.log(resdata.data);
        setError(false)
      }
      catch (error) {
        setLoading(true)
        console.log(error);
        setError(true)
        setLoading(false)
        setData([])
      }
    }
    asyncData();
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [dimensions])

   const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage,] = useState(10)


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = data.slice(indexOfFirstPost,indexOfLastPost)

    const paginate = (pageNumber) =>{ setCurrentPage(pageNumber)}

  return (


    <div className="App">
      <MyMap name="meghal" data={data} error={error} loading={loading} />
      <MyInfo data={currentPosts} error={error} posts={currentPosts} error={error} loading={loading} />
      <Pagination currentPage={currentPage} postsPerPage={postsPerPage} totalPosts={data.length} paginate={paginate} />
      <Footer />
    </div>
  );

}

export default App;
