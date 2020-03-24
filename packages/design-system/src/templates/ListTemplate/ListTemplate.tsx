import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.ul`
    width: 100%;
    padding: 0;

    li {
        list-style-type: none;
    }
`

interface IListTemplateProps {
    children: any
}

const ListTemplate = ({ children }: IListTemplateProps) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default ListTemplate
