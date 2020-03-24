import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.figure`
    position: relative;
    cursor: pointer;
    margin-bottom: 0;
    padding: 5px;

    img {
        width: 100%;
        height: 100%;
        border-radius: 8px;
        border: 1px solid #e8ebed;
    }

    h5 {
        position: absolute;
        color: #fff;
        right: 5%;
        bottom: 5%;
        font-size: .7rem;
        font-weight: 700;
        line-height: 1.44;
        text-shadow: .3px 0 .3px rgba(0,0,0,.5);
        letter-spacing: .055rem;

        @media (min-width: 600px) {
            font-size: 1.2rem;
        }

    }
`

interface ITileProps {
    image: string,
    price: string
}

const Tile = ({ image, price }: ITileProps) => {
    return (
        <Wrapper>
            <img src={ image }/>
            <h5>{price}</h5>
        </Wrapper>
    )
}

export default Tile
