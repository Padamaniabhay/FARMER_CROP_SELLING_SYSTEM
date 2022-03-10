import React from 'react';
import CategoryCard from './CategoryCard';
const category = [
    {
        image: "https://wallpaperaccess.com/full/6368530.jpg",
        title: "Fruits",
        summary: "Our fruits are natural. Without artificials or junks. Always FRESH.",
        Id:"fruit"
    },
    {
        image: "https://media.istockphoto.com/photos/fresh-fruits-and-vegetables-picture-id589415708?b=1&k=20&m=589415708&s=170667a&w=0&h=ZDdFEXXcJxbmSsq65xTspeGgwc5cVvgX2JotlYvxliI=",
        title: "Vegetables",
        summary: "Checkout our major varieties of Vegetable. Fresh and nutrituous.",
        Id:"vegetables"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2016/12/26/532501-wheat-863392960720.jpg",
        title: "Cereals",
        summary: "Major varieties of cereals & nuts. Raw or processed.",
        Id:"cereals"
    }
]

const HomeCategory = () => {
    return <>
        <div className='flex gap-6 w-full h-56 justify-between px-20'>
            {
                category.map((props) => (<CategoryCard {...props}/>))
            }
        </div>
    </>;
};

export default HomeCategory;
