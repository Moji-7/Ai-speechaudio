import React from 'react';
import logo from './logo.svg';
import './App.css';
import GetText from './components/GetText';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LoadMore from './components/LoadMore';

// import DiagramFlow from './components/flow/c';
// import { ReactFlowProvider } from '@xyflow/react';
// import Diagram from './components/flow/d';

import Diagram from './components/flow/8';
import DiagramAA from './components/flow/e';
import DiagramM from './components/flow/9';


const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <header className="App-header">
      {/* <GetText/> */}
      {/* <ReactFlowProvider>
      <DiagramFlow/>
      </ReactFlowProvider> */}

      {/* <Diagram/> */}
      <DiagramM/>
 

      {/* <LoadMore/> */}
      </header>
    </div>
    </QueryClientProvider>
  );
}

export default App;
