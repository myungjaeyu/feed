import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.li`
    display: flex;
    width: 100%;
    height: 150px;
    padding: 1rem;

    h4 {
        border-radius: 100px;
        height: fit-content;
        margin-top: .5rem;
        padding: .5rem 1rem;
        color: #908f95;


        &.first,
        &.second,
        &.third {
            color: #fff;
        }

        &.first {
            background-color: #f8cc54;
        }

        &.second {
            background-color: #bbbbbb;
        }

        &.third {
            background-color: #ba9061;
        }
    }

    img {
        height: 100%;
        border-radius: 12px;
        margin: 0 1.2rem;
    }

`

const Content = styled.div`
    display: flex;
    align-items: center;

    h5 {
        color: #26282b;
        font-weight: 700;
    }

    h6 {
        color: #bbbbbd;
    }

`

interface IRankProps {
    rank: number,
    title: string,
    description: string
}

const Rank = ({ rank, title, description }: IRankProps) => {

    const setRankClassName = rank => [
        { rank: 1, className: 'first' },
        { rank: 2, className: 'second' },
        { rank: 3, className: 'third' }
    ].find(e => e.rank === rank) || { className: '' }

    return (
        <Wrapper>
            <h4 className={ setRankClassName(rank).className }>
                { rank }
            </h4>
            <img src='https://usercontents-c.styleshare.kr/images/34571457/original' />
            <Content>

                <div>
                    <h5>
                        { title }
                    </h5>
                    <h6>
                        { description }
                    </h6>
                </div>

            </Content>
        </Wrapper>
    )
}

export default Rank
