import React, { useState } from 'react'
import Count from './Count'
import Head from './Head'



const Counter = () => {

    let [count, setCount] = useState(0)


    // increament function
    function increament() {
        if (count >= 10  && count < 50 ) {
            setCount(count + 5)
        }
        else if(count >= 50) {
            setCount(count + 10)
        }
        else {
            setCount(count + 1)
        }
        if(count >= 100 ){
            setCount(count + 100)
       }
        
    }

    // decreament function
    function decreament() {
        if( count > 10 && count <= 50){
            setCount(count - 5)
        }
        else if(count >= 50){
            setCount(count - 10 )
        }
        else if(count > 0){
            setCount(count - 1)
        }
        

    }

    return (
        <>
            <div className=' w-25 m-auto  d-flex  justify-content-center  align-items-center  ' style={{ height: "100vh" }}>
               <div className=' a-count bg-danger p-5 '>
              <Head name={""} />
               <div className=' m-auto bg-white d-flex  justify-content-center  align-items-center  ' style={{ width: "50px", height: "50px", borderRadius: "50%" }}>
                  <Count count={count} />
                </div>
                <div className='d-flex gap-2 justify-content-center mt-2 '>
                    <button onClick={increament} type="button" class="btn btn-primary ">+</button>
                    <button onClick={decreament} type="button" class="btn btn-warning">-</button>
                </div>

               </div>
            </div>
        </>
    )
}

export default Counter