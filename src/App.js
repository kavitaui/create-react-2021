// import React from 'react' {it is used bfore 17 version of react for jsx.}

import React from "react"

const App = () => {
  return (
    <div>
      <h1>welcome to kavita react learning. hello world.</h1>
      <MyName />

    </div>
  )
}
// how react is actually looking into it 
// const App =()=>{
//   return React.createElement(
//     "div",
//     {}
//     react.createElement("h1",{},"Hello World")
//   )
// }
// there are always use camel case in react attribute.
//  how to create a nested componant.
const MyName = () => {
  return (<div><h1>Kavita Pandey</h1>
 
  </div>)
}

export default App;




