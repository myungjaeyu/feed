import React from 'react'
import styled from '@emotion/styled'

const Title = styled.h5`
    color: #26282b;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 0;

    small {
        margin-left: 1rem;
        color: #c2c3c5;
    }
`

interface IHeaderTitleProps {
    title: string
    description: string
}

const HeaderTitle = ({ title, description }: IHeaderTitleProps) => {
    return (
        <Title>
            {title}
            <small>{description}</small>
        </Title>
    )
}

export default HeaderTitle
