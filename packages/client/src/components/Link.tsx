import { NavLink } from 'react-router-dom'
import styled from '@emotion/styled'

const StyledNavLink = styled(NavLink)`
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

export default StyledNavLink