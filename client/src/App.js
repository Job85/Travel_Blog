import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav';
import './App.css';
import Home from './components/Home'
import Posts from './components/Posts'
import Comments from './components/Comments'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <h2>
        Travel Blog
      </h2>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/posts/:id' element={<Comments />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;