import React from 'react'
import styled from '@emotion/styled'

interface ITabProps {
    tabsCount: number
}

const Tab = styled.article`
    ${({ tabsCount }: ITabProps) => `
    button {
        appearance: none;
        padding: 1rem;
        outline: none;
        border: 1px solid rgb(232, 235, 237);
        background-color: #f7f8fa;
        color: #cdced1;

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
