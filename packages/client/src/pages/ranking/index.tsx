import React from 'react'

import Layout from '@components/Layout'

import { Rank, ListTemplate } from 'design-system'

import Link from '@components/Link'

interface IRankProps {}

const Ranking = ({}: IRankProps) => {

    return (
        <Layout>

            <ListTemplate>

                <Link href='https://www.stylesha.re/+webview/soho/redirect?region=kr&to=http%3A%2F%2Fwww.gosister.co.kr%3Futm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare' target='_blank'>
                    <Rank rank={1} title='소녀나라' description='10대, 캐쥬얼' />
                </Link>
                <Link href='https://www.stylesha.re/+webview/soho/redirect?region=kr&to=http%3A%2F%2Fwww.gosister.co.kr%3Futm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare' target='_blank'>
                    <Rank rank={2} title='소녀나라' description='10대, 캐쥬얼' />
                </Link>
                <Link href='https://www.stylesha.re/+webview/soho/redirect?region=kr&to=http%3A%2F%2Fwww.gosister.co.kr%3Futm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare' target='_blank'>
                    <Rank rank={3} title='소녀나라' description='10대, 캐쥬얼' />
                </Link>
                <Link href='https://www.stylesha.re/+webview/soho/redirect?region=kr&to=http%3A%2F%2Fwww.gosister.co.kr%3Futm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare' target='_blank'>
                    <Rank rank={4} title='소녀나라' description='10대, 캐쥬얼' />
                </Link>
                <Link href='https://www.stylesha.re/+webview/soho/redirect?region=kr&to=http%3A%2F%2Fwww.gosister.co.kr%3Futm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare' target='_blank'>
                    <Rank rank={5} title='소녀나라' description='10대, 캐쥬얼' />
                </Link>
                <Link href='https://www.stylesha.re/+webview/soho/redirect?region=kr&to=http%3A%2F%2Fwww.gosister.co.kr%3Futm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare' target='_blank'>
                    <Rank rank={6} title='소녀나라' description='10대, 캐쥬얼' />
                </Link>
                <Link href='https://www.stylesha.re/+webview/soho/redirect?region=kr&to=http%3A%2F%2Fwww.gosister.co.kr%3Futm_source%3Dstyleshare%26cafe_mkt%3Dstyleshare' target='_blank'>
                    <Rank rank={7} title='소녀나라' description='10대, 캐쥬얼' />
                </Link>

            </ListTemplate>

        </Layout>
    )
}

export default Ranking