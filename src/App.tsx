import React from 'react';
import logo from './logo.svg';
import './App.css';
import GetText from './components/GetText';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LoadMore from './components/LoadMore';


const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <header className="App-header">
      <GetText/>
      {/* <LoadMore/> */}
      </header>
    </div>
    </QueryClientProvider>
  );
}

export default App;
