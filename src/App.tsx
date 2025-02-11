import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles'

//  === Lessons ===
import Lesson17 from 'lessons/Lesson_17/Lesson17'
import Layout from 'pages/UsersApp/Layout/Layout'
import Home from 'pages/UsersApp/Home/Home'
import Users from 'pages/UsersApp/Users/Users'
import Lesson18 from 'lessons/Lesson_18/Lesson18'

// === Homeworks ===

// === Consultations ===

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      {/* <Lesson17 /> */}
      {/* UserApp - Practice - Lesson17 */}
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='/lesson17' element={<Lesson17 />} />
          <Route path='/lesson18' element={<Lesson18/>}/>
          <Route path='*' element='Page not found'/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
export default App