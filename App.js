import React from 'react';

import SliderComp from './src/components/SwitchComp';
import WebViewComp from './src/components/WebViewComp';
import Home from './src/components/Home';
import FetchData from './src/components/FetchData';

class App extends React.Component{
  render(){
    return (
      <WebViewComp/>
      // <SliderComp/>
      // <FetchData/>
      );
  }
};

export default App;