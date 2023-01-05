import './App.css';
import boxArr from './data/boxes';
import React from 'react';
import Box from './components/Box';

function App() {
  const [boxes, setBoxes] = React.useState(boxArr);


  function toggle(id) {

    // onl school methood 

    // console.log(`${id} cliced`)
    // setBoxes(prevBoxes => {
    //   const arr = [];
    //   for(let i=0; i<prevBoxes.length; i++) {
    //     if(prevBoxes[i].id === id) {
    //       const newObj = {
    //         ...prevBoxes[i],
    //         on: !prevBoxes[i].on,
    //       }
    //       arr.push(newObj);
    //     }
    //     else {
    //       const newObj = {
    //         ...prevBoxes[i],
    //       }
    //       arr.push(newObj)
    //     }
    //   }
    //   return arr;
    // })

    // new methood 

    setBoxes(prevBoxes => {
      return prevBoxes.map(box => box.id === id ? {...box,on: !box.on} : {...box})
    })
  }
  const newArr = boxes.map(box => {
    return <Box key={box.id}
                id={box.id}
                content={box.content}
                on={box.on}
                toggle={toggle}
                  />
  })
  return (
    <div className="App">
        {newArr}
    </div>
  );
}

export default App;
