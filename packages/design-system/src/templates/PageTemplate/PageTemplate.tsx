import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
    background-color: #f7f8fa;
    max-width: 900px;
    margin: auto;
`

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1.3rem;
`

interface IPageTemplateProps {
    children: any
    HeaderTitle: React.ReactNode
    HeaderTab: React.ReactNode
}

const PageTemplate = ({ HeaderTitle, HeaderTab, children }: IPageTemplateProps) => {
    return (
        <Wrapper>
            <Header>
                {HeaderTitle}
                {HeaderTab}
            </Header>
            {children}
        </Wrapper>
    )
}

export default PageTemplate
