
import './App.css'
import React from 'react'

import { HashLink } from 'react-router-hash-link'

function App() {


  return (
    <div className="App">

      <div className='navbar'>
        <HashLink style={{textDecoration:"none"}} smooth to={"/#project"}> <button>Project</button> </HashLink>
        <HashLink style={{textDecoration:"none"}}  smooth to={"/#about"}> <button>About</button> </HashLink>
        <HashLink style={{textDecoration:"none"}}  smooth to={"/#contact"}> <button>Contact</button> </HashLink>
      </div>
   
     <div id='project'>
      <h1>Project</h1>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non justo purus. Sed eget laoreet metus, condimentum tristique nisl. Donec interdum ultricies erat ut ornare. Morbi egestas eros nec risus mattis, ac dignissim tellus semper. Aliquam sollicitudin, purus non accumsan bibendum, nisi metus porttitor turpis, ut elementum nunc magna nec sem. Mauris blandit aliquam lectus. Sed ac lobortis urna. Pellentesque commodo leo sed leo efficitur fermentum. Nunc facilisis, magna nec hendrerit scelerisque, ligula sapien aliquam ipsum, efficitur molestie urna est sed mi. Nullam faucibus purus nec purus elementum, ac fringilla massa accumsan. Aenean euismod, eros in dapibus accumsan, enim massa dictum sem, quis efficitur dui neque sit amet est. Aliquam faucibus eros a tellus fermentum hendrerit. Proin finibus nisi nulla, sed molestie lacus auctor at. Nam mattis velit sit amet arcu convallis, in bibendum ipsum placerat.</p>
     </div>

     <div id='about'>
      <h1>About</h1>
      <p>Nullam in augue vitae magna facilisis aliquet. Nunc a rutrum est. Pellentesque at cursus mauris. Proin mollis gravida libero sed rhoncus. Nullam ac maximus nisi. Quisque non lacus vestibulum, sagittis metus consequat, imperdiet libero. Nam pulvinar libero ut elit viverra interdum. Vestibulum vitae vulputate risus. Suspendisse et mi nec purus iaculis blandit.</p>
     </div>

     <div id='contact'>
      <h1>Contact</h1>
      <p>Suspendisse ut felis tincidunt, aliquet augue vitae, faucibus leo. Aenean ultrices porttitor convallis. Sed eget purus nec sapien mattis luctus id vitae lacus. Proin augue velit, varius ut ultricies a, pellentesque a justo. Etiam a ex nec quam molestie gravida. Mauris id sapien leo. Nullam cursus ex vel arcu vestibulum, vel pretium dolor rhoncus. Ut iaculis augue sit amet quam pretium vehicula. Aliquam pretium lorem quis aliquet condimentum. Mauris at vulputate dolor. Nunc consectetur ante sed gravida viverra.</p>
     </div>
      
    </div>
  )
}

export default App
