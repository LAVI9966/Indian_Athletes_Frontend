import React from 'react'
import Layout from '../Layout/Layout'
import Hero from './Hero/Hero'
import FeaturedAthletes from './Featured_Athletes/FeaturedAthletes'

const Home = () => {
    return (
        <>
            <Layout>
                <Hero></Hero>
                <FeaturedAthletes></FeaturedAthletes>
            </Layout>
        </>
    )
}

export default Home