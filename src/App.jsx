import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About'
import Services from './routes/Services'
import Contact from './routes/Contact'
import PrivacyPage from './routes/PrivacyPage'
import Regulation from './routes/Regulation'
import PageNotFound from './PageNotFound'
import Layout from './layout/Layout'
import { useTranslation } from 'react-i18next'
import { ROUTES } from './utils'

const App = () => {
  const { t } = useTranslation();
  return (
    <div>
      
        <Routes>
          <Route element={<Layout t={t}/>}>
            <Route path={ROUTES.home} element={<Home t={t} />} />
            <Route path={ROUTES.about} element={<About t={t}/>} />
            <Route path={ROUTES.services} element={<Services />} />
            <Route path={ROUTES.contact} element={<Contact />} />
            <Route path={ROUTES.privacy} element={<PrivacyPage />} />
            <Route path={ROUTES.regulation} element={<Regulation />}   />
          </Route>
    
          <Route path={ROUTES.not_found} element={<PageNotFound />} />
        </Routes>
   
    </div>
  )
}

export default App