import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.section`
    width: 100%;

    display: flex;
    flex-wrap: wrap;

    a, figure {
        flex-basis: 33%;
    }

`

interface ITilesTemplateProps {
    children: any
}

const TilesTemplate = ({ children }: ITilesTemplateProps) => {
    return (
        <Wrapper>
            { children }
        </Wrapper>
    )
}

export default TilesTemplate
