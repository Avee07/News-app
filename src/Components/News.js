import React,{useEffect,useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from 'prop-types'

const News = (props) => {
    
  const [articles ,setArticles] = useState([])
  const [loading ,setLoading] = useState(true)
  const [page ,setPage] = useState(1)
  const [totalResults ,setTotalResults] = useState(0)

  const Update = async() => {
    props.setProgress(10)
    
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    props.setProgress(60)
    let data = await fetch(url);
    let parsedData = await data.json();

    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }
  useEffect(()=>{
    console.log("Effect");
    Update()
    // eslint-disable-next-line
  },[]);
  
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1)
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  console.log("render");
    return (
      <>
      

      <h1 className = "text-center"  style={{margin:'75px 0px'}}>Top {capitalizeFirstLetter(props.category)} Headlines by News-flash</h1>
      {loading && <Spinner/>}
      
       <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={loading && <Spinner/>}
          style={{overflow: 'none'}}
        >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
            return <div className="col-md-4 " key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={
                                    element.description ? element.description.slice(0, 100) : ""
                                  }
                      imgurl={element.urlToImage}
                      author = {element.author ? element.author: 'Unknown' }
                      source = {element.source.name ? element.source.name : 'Unknown'}
                      publishedAt={element.publishedAt}
                      newsUrl={element.url}
                    />
                  </div>
            })}
          </div>
          </div>
        </InfiniteScroll>

      </>
    );
  
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}
News.defaultProps = {
  country : 'in',
  pageSize : 15,
  category: 'business'
}


export default News;
