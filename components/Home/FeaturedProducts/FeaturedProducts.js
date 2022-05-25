import React, { useState, useEffect } from 'react'
import { MdOutlineFeaturedPlayList } from 'react-icons/md'
import SingleProduct from '../../SingleProduct/SingleProduct'
const style = {
    wrapper: 'px-4 py-4',
    headingContainer: 'flex items-center jusitfy-center flex-col my-12',
    smallHeading: ' text-4xl md:text-4xl max-w-fit mx-auto py-2 text-stone-800 ',
    productsContainer:'flex flex-col md:flex-row w-[80%] md:w-[95%] lg:w-[70%] mx-auto justify-around gap-6',
}

const dummy = [
    {
        img: '/img/products/product-1.webp', name: 'School bag', price: 500
    }, { img: '/img/products/product-2.webp', name: 'SHoes', price: 1000 }, { img: '/img/products/product-3.webp', name: 'Glasses', price: 1000 }, { img: '/img/products/product-4.webp', name: 'Travel Bag', price: 2500 }
]
const FeaturedProducts = () => {

    return (
        <div className={style.wrapper}>
            <div className={style.headingContainer}>
                <h2 className={style.smallHeading} style={{ fontFamily: 'Yeseva One, cursive' }} >Featured Products</h2>
                <MdOutlineFeaturedPlayList className="text-3xl " />
            </div>

            <div className={style.productsContainer}>
                {dummy.map((item) => <SingleProduct item={item} />)}
            </div>
        </div>

    )
}

export default FeaturedProducts;