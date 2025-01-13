import React from 'react'
import {Hero} from '../Mycomponents/Hero/Hero'
import { Popular } from '../Mycomponents/Popular/Popular'
import { Offers } from '../Mycomponents/Offers/Offers'
import{NewCollection} from '../Mycomponents/NewCollection/NewCollection'
import { NewsLetter } from '../Mycomponents/NewsLetter/NewsLetter'
export const Shop = () => {
return (
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollection/>
        <NewsLetter/>
    </div>
)
}
