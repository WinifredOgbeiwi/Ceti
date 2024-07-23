import React, { useEffect } from 'react'
import MiniHero from '../constant/MiniHero'
import Content from '../pages/privacy/Content'
import Bookmark from '../pages/privacy/Bookmark'

const PrivacyPage = ({ t }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <MiniHero heading={t("privacy.herosection.heading")} />
      <Bookmark t={t} />
      <Content t={t} />
    </main>
  )
}

export default PrivacyPage