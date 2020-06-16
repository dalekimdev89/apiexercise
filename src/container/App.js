import React, { Component } from 'react';
import Dropdown from '../component/Dropdown';
import Searchbox from '../component/Searchbox';
import Output from '../component/Output';
// import { render } from '@testing-library/react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      swData : []
    }
  }

  componentDidMount() {
    // fetch('https://swapi.dev/api/')

    fetch('https://swapi.dev/api/people/')
      .then(resp => resp.json())
      .then(data => this.setState({ swData : data }));
  }

  render() {
    const { swData } = this.state;
    const outputData = swData.results;
          
    console.log('outputData', outputData);
    return (
       <div className='tc'>

          <h1 className='f1'>Fetching SW API Exercise</h1>
          <Dropdown />
          <Searchbox />
          <Output prop={outputData}/>

       </div>
       );
  }

}


// const App = () => {
//   render() {
//     return (
//       <div className='tc'>
//         <h1>Fetching SW API Exercise</h1>
//         <FetchComponent />
//       </div>
//     );
//   }
// }

export default App;
