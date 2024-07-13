// import React, { Component } from 'react'

// import Newsitem from './Newsitem'
// import Loading from './Loading';
// import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";


//Using class based component
// export default class Enews extends Component {

//   //here by using static we can use proptypes
//   static propTypes = {
//     country: PropTypes.string.isRequired,
//     pageSize: PropTypes.number.isRequired,
//     category: PropTypes.string.isRequired
//   }

//   static defaultProps = {
//     country: "in",
//     pageSize: 8,
//     category: "general"
//   }
//   capitalizeFirstLetter = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   }
//   constructor(props) {
//     super(props);
//     // console.log("Hello iam a constructor of Enews component");
//     this.state = {
//       articles: [],
//       loading: false,
//       page: 1,
//       totalResults: 0
//     }
//     document.title = `${this.capitalizeFirstLetter( props.category)} - News Of The Day`;
//   }

//   async updateNews(pageNo) {
//      props.setProgress(10);
//     const url = `https://newsapi.org/v2/top-headlines?country=${ props.country}&category=${ props.category}&apiKey=${ props.apikey}&page=${this.state.page}&pageSize=${ props.pageSize}`
//     this.setState({
//       loading: true
//     })
//     let data = await fetch(url);
//      props.setProgress(30);
//     let jsondata = await data.json();
//      props.setProgress(60);
//     this.setState({
//       articles: jsondata.articles,
//       totalResults: jsondata.totalResults,
//       loading: false
//     })
//      props.setProgress(100);
//   }

//   async componentDidMount() {
//     // console.log("It is component did mount")
//     // let url = `https://newsapi.org/v2/top-headlines?country=${ props.country}&category=${ props.category}&apiKey=8e1402fca16a40008af7ad4bd77d7554&page=1&pageSize=${ props.pageSize}`;
//     // this.setState({
//     //   loading: true
//     // })
//     // let data = await fetch(url);
//     // // console.log(data);
//     // let jsondata = await data.json();
//     // // console.log(jsondata);
//     // this.setState({ 
//     //   articles: jsondata.articles,
//     //    totalResults: jsondata.totalResults,
//     //    loading: false
//     //    });
//     this.updateNews();
//   }


//   previousclick = async () => {
//     // console.log("Previous clicked");
//     // let url = `https://newsapi.org/v2/top-headlines?country=${ props.country}&category=${ props.category}&apiKey=8e1402fca16a40008af7ad4bd77d7554&page=${this.state.page - 1}&pageSize=${ props.pageSize}`
//     // this.setState({
//     //   loading: true
//     // })
//     // let data = await fetch(url);
//     // let jsondata = await data.json();
//     // this.setState({
//     //   page: this.state.page - 1,
//     //   articles: jsondata.articles,
//     //   loading: false
//     // })

//     this.setState({ page: this.state.page - 1 })
//     this.updateNews();
//   }
//   nextclick = async () => {
//     if (this.state.page + 1 > Math.ceil(this.state.totalResults /  props.pageSize)) {
//     }
//     else {
//       // console.log("Next clicked");
//       // let url = `https://newsapi.org/v2/top-headlines?country=${ props.country}&category=${ props.category}&apiKey=8e1402fca16a40008af7ad4bd77d7554&page=${this.state.page + 1}&pageSize=${ props.pageSize}`
//       // this.setState({
//       //   loading: true
//       // })
//       // let data = await fetch(url);
//       // let jsondata = await data.json();
//       // this.setState({
//       //   page: this.state.page + 1,
//       //   articles: jsondata.articles,
//       //   loading: false
//       // })
//     }
//     this.setState({ page: this.state.page + 1 });
//     this.updateNews();
//   }

//   fetchMoreData = async () => {
//     this.setState({
//       page: this.state.page + 1
//     })
//     const url = `https://newsapi.org/v2/top-headlines?country=${ props.country}&category=${ props.category}&apiKey=${ props.apikey}&page=${this.state.page}&pageSize=${ props.pageSize}`
//     // this.setState({
//     //   loading: true
//     // })
//     let data = await fetch(url);
//     let jsondata = await data.json();
//     this.setState({
//       articles: this.state.articles.concat(jsondata.articles),
//       totalResults: jsondata.totalResults
//     })
//   }


//   render() {
//     // console.log("it is render");
//     return (

//       //using the next and previous buttons
//       // <div className="container">
//       //   <div className="container my-3">
//       //     <h2 className='text-center'>News Of The Day: Latest News On {this.capitalizeFirstLetter( props.category)}</h2>
//       //     <div className='text-center'>{this.state.loading && <Loading />}</div>
//       //     <div className="row">
//       //       {!this.state.loading && this.state.articles.map((element) => {
//       //         return <div className="col-md-4" key={element.url}>
//       //           <Newsitem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 91) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
//       //         </div>
//       //       })}
//       //     </div>
//       //   </div>
//       //   <div className="container d-flex justify-content-between">
//       //     <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.previousclick}>&laquo; Previous</button>
//       //     <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / ( props.pageSize))} type="button" className="btn btn-dark" onClick={this.nextclick}>Next &raquo;</button>
//       //   </div>
//       // </div>


//       //using infinite scroll
//       <div className="container">
//         <div className="container my-3 text-center">
//           <h2 className='text-center'>News Of The Day: Latest News On {this.capitalizeFirstLetter( props.category)}</h2>
//           <div className='text-center'>{this.state.loading && <Loading />}</div>
//           <InfiniteScroll
//             dataLength={this.state.articles.length}
//             next={this.fetchMoreData}
//             hasMore={this.state.articles.length !== this.state.totalResults}
//             loader={<Loading />}
//           >
//             <div className="container">
//               <div className="row">
//                 {this.state.articles.map((element) => {
//                   return <div className="col-md-4" key={element.url}>
//                     <Newsitem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 91) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
//                   </div>
//                 })}
//               </div>
//             </div>
//           </InfiniteScroll>
//         </div>
//         {/* <div className="container d-flex justify-content-between">
//           <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.previousclick}>&laquo; Previous</button>
//           <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / ( props.pageSize))} type="button" className="btn btn-dark" onClick={this.nextclick}>Next &raquo;</button>
//         </div> */}
//       </div>
//     )
//   }
// }


//using function based component
import React, { useState, useEffect } from 'react'
import Newsitem from './Newsitem'
import Loading from './Loading';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const Enews = (props) => {

  //here by using static we can use proptypes

  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const updateNews = async () => {
  props.setProgress(10);
  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
  setloading(true);
  let data = await fetch(url);
  props.setProgress(30);
  let jsondata = await data.json();
  props.setProgress(60);
  setarticles(jsondata.articles);
  settotalResults(jsondata.totalResults);
  setloading(false);
  props.setProgress(100);
}


useEffect(() => {
  document.title = `${capitalizeFirstLetter( props.category)} - News Of The Day`;
  updateNews();
  // eslint-disable-next-line
}, []);


const previousclick = async () => {
  // console.log("Previous clicked");
  // let url = `https://newsapi.org/v2/top-headlines?country=${ props.country}&category=${ props.category}&apiKey=8e1402fca16a40008af7ad4bd77d7554&page=${this.state.page - 1}&pageSize=${ props.pageSize}`
  // this.setState({
  //   loading: true
  // })
  // let data = await fetch(url);
  // let jsondata = await data.json();
  // this.setState({
  //   page: this.state.page - 1,
  //   articles: jsondata.articles,
  //   loading: false
  // })

  setpage(page - 1);
  updateNews();
}
const nextclick = async () => {
  // if (this.state.page + 1 > Math.ceil(this.state.totalResults /  props.pageSize)) {
  // }
  // else {
  // console.log("Next clicked");
  // let url = `https://newsapi.org/v2/top-headlines?country=${ props.country}&category=${ props.category}&apiKey=8e1402fca16a40008af7ad4bd77d7554&page=${this.state.page + 1}&pageSize=${ props.pageSize}`
  // this.setState({
  //   loading: true
  // })
  // let data = await fetch(url);
  // let jsondata = await data.json();
  // this.setState({
  //   page: this.state.page + 1,
  //   articles: jsondata.articles,
  //   loading: false
  // })
  // }
  setpage(page + 1);
  updateNews();
}

const fetchMoreData = async () => {
  
  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`
  setpage(page + 1);
  // this.setState({
  //   loading: true
  // })
  let data = await fetch(url);
  let jsondata = await data.json();
  setarticles(articles.concat(jsondata.articles));
  settotalResults(jsondata.totalResults);
}

// console.log("it is render");
return (

  //using the next and previous buttons
  // <div className="container">
  //   <div className="container my-3">
  //     <h2 className='text-center'>News Of The Day: Latest News On {this.capitalizeFirstLetter( props.category)}</h2>
  //     <div className='text-center'>{this.state.loading && <Loading />}</div>
  //     <div className="row">
  //       {!this.state.loading && this.state.articles.map((element) => {
  //         return <div className="col-md-4" key={element.url}>
  //           <Newsitem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 91) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
  //         </div>
  //       })}
  //     </div>
  //   </div>
  //   <div className="container d-flex justify-content-between">
  //     <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.previousclick}>&laquo; Previous</button>
  //     <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / ( props.pageSize))} type="button" className="btn btn-dark" onClick={this.nextclick}>Next &raquo;</button>
  //   </div>
  // </div>


  //using infinite scroll
  <div className="container">
    <div className="container my-3 text-center">
      <h2 className='text-center' style={{marginTop: "80px"}}>News Of The Day: Latest News On {capitalizeFirstLetter(props.category)}</h2>
      <div className='text-center'>{loading && <Loading />}</div>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Loading />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <Newsitem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 91) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
    {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.previousclick}>&laquo; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / ( props.pageSize))} type="button" className="btn btn-dark" onClick={this.nextclick}>Next &raquo;</button>
        </div> */}
  </div>
)


Enews.propTypes = {
  country: PropTypes.string.isRequired,
  pageSize: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired
}

Enews.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general"
}
}
export default Enews;

