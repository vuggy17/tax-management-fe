import React from 'react'
import { Card, Typography } from 'antd';
import { Link } from 'react-router-dom';
import './card.style.css'
import CategorySelect from '../Blog/List/components/CategorySelect';
const { Meta } = Card;

export default function QuickStart() {
    return (
        <>
            <Typography.Title className='text-center' style={{
                marginTop: 40
            }} level={3}>
                Bạn đang muốn truy cập:
            </Typography.Title>
            <br />
            <br />
            <div className='flex w-full justify-center'>
                <div className='w-fit mx-auto flex gap-8'>
                    <Link to="/blog">
                        <div style={{
                            width: 400,
                            height: 500
                        }} className='bg-white hover:shadow object-contain relative card'>
                            <Typography.Text className=''>Thông tin thuế</Typography.Text>
                        </div>
                    </Link>
                    <Link to="caculate">
                        <div style={{
                            width: 400,
                            height: 500
                        }} className='bg-white hover:shadow object-contain relative card-calc'>
                            <Typography.Text className=''>Tra cứu dư nợ</Typography.Text>

                        </div>
                    </Link>
                </div>
            </div>
            <div className='flex justify-center'>
                <Typography.Text className='suggestion' type='secondary'>
                    Liên hệ hỗ trợ <Link to="/">+841900000</Link>
                </Typography.Text>
            </div>
        </>
    )
}
