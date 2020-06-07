import React from 'react';
 function Greets(props){
     return (
        <div>
            <h1>Greetings to Sir zia </h1>
            <h1>Greetings to all my teacher's</h1>
           <h1>Greetings to Sir{props.sirName}</h1>
           <h1>Greetings to Sir{props.sirName1}</h1>
           <h1>Greetings to Miss{props.missName}</h1>
        </div>
     );
}
export default Greets
