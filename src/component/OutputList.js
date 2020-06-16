import React from 'react';
import Output from './Output.js'

const OutputList = ({ prop }) => {
   console.log('outputlistprop', prop)

    return(
      <div>
         <h2>OUTPUT</h2>
         {
            prop.map((people, i) => {
                  return (
                     <Output 
                        key={i}
                        name={people.name}
                        height={people.height}
                        mass={people.mass}
                        films={people.films}
                     />
                  );
            })
         }
      </div>
    );

}

export default OutputList;