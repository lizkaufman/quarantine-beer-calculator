import React from "react"
import { Link } from "gatsby"
import css from "./index.module.css"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Sliders from "../components/Sliders/index"

const IndexPage = () => (
  <Layout>
    <div id={css.appContainer}>
      <div id={css.intro}>
        <SEO title="Beer Calculator" />
        <img
          alt="Corona beer bottle"
          src="https://i.pinimg.com/originals/eb/00/b8/eb00b817c2e9d0d0006899977a0d77f8.png"
          id={css.beerPic}
          height="300px"
        />
        <h3 id={css.introText}>
          We know the most important question is about toilet roll. But what
          about the next thing to consider? Beer! Change the sliders below to
          see how you'll fare.
        </h3>
      </div>
      <Sliders />
    </div>
  </Layout>
)

export default IndexPage
