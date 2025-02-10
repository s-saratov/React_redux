import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles'

//  === Lessons ===
import Lesson17 from 'lessons/Lesson_17/Lesson17'
import Layout from 'pages/UsersApp/Layout/Layout'
import Home from 'pages/UsersApp/Home/Home'
import Users from 'pages/UsersApp/Users/Users'


// === Homeworks ===
import Homework17 from 'homeworks/Homework_17/Honework17'

// === Consultations ===

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      {/* <Lesson17 /> */}
      {/* UserApp - Practice - Lesson17 */}
      {/* <Layout>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='*' element='Page not found'/>
        </Routes>
      </Layout> */}
      <Homework17/>
    </BrowserRouter>
  )
}
export default App