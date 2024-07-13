// import React, { Component } from 'react'

//class based component
// export default class Newsitem extends Component {
//   render() {
//     let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
//     return (
//       <div className='my-3'>
//         <div className="card">
//           <div style={{ display: "flex", justifyContent: 'flex-end', right: "0", position: "absolute" }}>
//             <span className=" badge rounded-pill bg-danger">

//               {source}
//             </span>
//           </div>
//           <img src={imageUrl ? imageUrl : "https://digitalfloats.com/wp-content/uploads/2023/10/ChatGPT.jpg"} className="card-img-top" alt="..." />
//           <div className="card-body">
//             <h5 className="card-title">{title}...</h5>
//             <p className="card-text">{description}...</p>
//             <p className="card-text"><small className="text-body-secondary">By {author ? author : "Unknown"} on {new Date(date).toDateString()}</small></p>
//             <a rel="noopener noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }


import React from 'react'
//function based component
const Newsitem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className='my-3'>
      <div className="card">
        <div style={{ display: "flex", justifyContent: 'flex-end', right: "0", position: "absolute" }}>
          <span className=" badge rounded-pill bg-danger">

            {source}
          </span>
        </div>
        <img src={imageUrl ? imageUrl : "https://digitalfloats.com/wp-content/uploads/2023/10/ChatGPT.jpg"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-body-secondary">By {author ? author : "Unknown"} on {new Date(date).toDateString()}</small></p>
          <a rel="noopener noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
        </div>
      </div>
    </div>
  )

}
export default Newsitem;
