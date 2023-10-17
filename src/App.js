import React from 'react'

import Resturant from './componant/Basics/Resturant'
import MyUseState from './componant/Hooks/MyUseState';
import UseEffect from './componant/Hooks/UseEffect';

const App = () => {
  return (
  <>
    <div>
      
      <Resturant />
    </div>
    <div>
      <MyUseState/>
      <UseEffect/>
    </div>
  </>
  )
}

export default App





