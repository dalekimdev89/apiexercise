import React, { Component } from 'react';
import Dropdown from '../component/Dropdown';
import Searchbox from '../component/Searchbox';
import OutputList from '../component/OutputList';
// import { render } from '@testing-library/react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      swData: [],
      dropdownValue: 'https://swapi.dev/api/people/?page=1'
    }
  }

  componentDidMount() {
    fetch(this.state.dropdownValue)
      .then(resp => resp.json())
      .then(data => this.setState({ swData : data.results}));
  }

  onDropChange = (event) => {
      this.setState({ dropdownValue: event.target.value })
  }

  render() {
    const { swData } = this.state;
    const finalOutput = swData;

    return !swData.length ? 
      <h1>LOADING...</h1> :
      (
        <div className=''>
            <h1 className='f1 tc'>Fetching SW API Exercise</h1>
            <Dropdown dropChange={this.onDropChange}/>
            <Searchbox />
            <OutputList prop = { swData }/>
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
