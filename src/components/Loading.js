// import React, { Component } from 'react' 
// import loading from './loading.gif'

//class based component
// export default class Loading extends Component {
//   render() {
//     return (
//       <div>
//         <img className='my-3' src={loading} alt="" />
//       </div>
//     )
//   }
// }


import React from 'react' 
import loading from './loading.gif'
//function based component
const Loading=()=>{
  return (
    <div>
      <img className='my-3' src={loading} alt="" />
    </div>
  )
}
export default Loading;
