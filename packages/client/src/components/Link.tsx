import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from '@emotion/styled'

const sharedStyle = `
    text-decoration: none;
    color: initial;
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
    }
`
const StyledNavLink = styled(NavLink)`${sharedStyle}`
const StyledHref = styled.a`${sharedStyle}`

export default (props) => !props.href ? <StyledNavLink {...props} /> : <StyledHref { ...props } />