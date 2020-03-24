import React from 'react'
import styled from '@emotion/styled'

interface ITabProps {
    tabsCount: number
}

const Tab = styled.article`
    ${({ tabsCount }: ITabProps) => `

    a {
        border: 1px solid rgb(232, 235, 237);
        display: inline-block;
        overflow: hidden;

        ${
            tabsCount > 1
                ? `&:first-child {
                border-top-left-radius: 8px;
                border-bottom-left-radius: 8px;
                border-right: 0;
            }
    
            &:last-child {
                border-top-right-radius: 8px;
                border-bottom-right-radius: 8px;
            }`
                : `
                border-radius: 8px;
            `
        }

    }

    button {
        appearance: none;
        padding: 1rem;
        outline: none;
        border: 0;
        background-color: #f7f8fa;
        color: #cdced1;

        &.selected {
            background-color: #fff;
            color: #46ab9a;
        }

    }
`}
`

interface IHeaderTabProps {
    tabs: React.ReactNode[]
}

const HeaderTab = ({ tabs }: IHeaderTabProps) => {
    return <Tab tabsCount={tabs.length}>{tabs}</Tab>
}

export default HeaderTab
