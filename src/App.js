import './App.css';
import Home from './components/Home/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Classes from './components/Classes/Classes';
import Staff from './components/Staff/Staff';
import NotFound from './NotFound/NotFound';
import Showcase from './components/Showcase/Showcase';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import { useState, useEffect } from 'react';

function App() {


  const [courses, setCourses] = useState([])
  useEffect(() => {
    fetch("./data.json")
      .then(res => res.json())
      .then(data => setCourses(data))
  }, [])

  console.log('from app, courses ', courses)

  const [listCourses, setListCourses] = useState([])
  useEffect(() => {
    let smallCourses = []
    for (let index = 0; index < courses.length; index++) {
      smallCourses.push(courses[index]);
      if (index===3) break
    }
    setListCourses(smallCourses)
  }, [courses])

  console.log('from app, listCourses ', listCourses)

  return (
    <div>

      <Router>

        <Header></Header>

        <Switch>
          <Route exact path="/">
            <Home listCourses={listCourses}></Home>
          </Route>
          <Route path="/home">
            <Home listCourses={listCourses}></Home>
          </Route>
          <Route path="/classes">
            <Classes courses={courses}></Classes>
          </Route>
          <Route path="/staff">
            <Staff></Staff>
          </Route>

          <Route path="/showcase">
            <Showcase></Showcase>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
