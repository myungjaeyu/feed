import React from 'react'
import styled from '@emotion/styled'

const StyledLoader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background: #dcdcdc;
    width: 150px;
    height: 40px;
    margin: auto;
    color: rgba(0,0,0,.5);
`

interface ILoaderProps {

}

const Loader = ({ }: ILoaderProps) => (
    <StyledLoader>
        <small>로딩중...</small>
    </StyledLoader>
)

export default Loader
