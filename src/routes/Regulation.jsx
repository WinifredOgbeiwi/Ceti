import React from 'react'
import MiniHero from '../constant/MiniHero'
import Content from '../pages/regulations/Content'
import Bookmark from '../pages/regulations/Bookmark'

const Regulation = ({ t }) => {
  return (
    <>
      <MiniHero heading={t("regulation.herosection.heading")} />
      <Bookmark t={t}/>
      <Content t={t} />
    </>
  )
}

export default Regulation