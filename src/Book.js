import React from 'react'

const Book = ({title,image,price,url}) => {
    return (
        <section>
            <img src={image} alt={title} />
            <h4>{title}</h4>
            <h5>{price}</h5>
            <a href={url} target="_blank" >Buy</a>
        </section>
    )
}

export default Book
