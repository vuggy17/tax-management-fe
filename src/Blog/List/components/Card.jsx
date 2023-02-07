import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Image, Typography } from 'antd';
import { convertDateTime, getFallBackImage, resolveImagePath } from '../../../app/shared/utils';
import { HeartIcon, ShareIcon } from "@heroicons/react/solid";
import "./card.style.css"
import ChildCategory from './ChildCategory';

function PostImage({ media, time, path }) {
    const { url, alt } = media || {};
    return (
        <div className="relative cursor-pointer overflow-hidden w-full">
            <Link to={path} >
                <div className="border border-product-border h-[256px]" >
                    <Image
                        className='w-full h-full object-cover'
                        height={256}
                        alt={alt}
                        preview={false}
                        src={resolveImagePath(url)}
                        fallback={getFallBackImage()}
                    />
                </div>

            </Link>
            <div className="absolute bg-gray-100 bg-opacity-80 top-10 text-xs p-2">
                <Typography.Text>
                    {convertDateTime(time)}
                </Typography.Text>
            </div>
        </div>
    );
}

function PostDescription({ post }) {
    const { title, path, description, category } = post || {};
    const navigate = useNavigate();

    return (
        <div className="flex flex-col px-2">
            <div className="flex-1">
                {/**Categories */}
                <div className="text-primary mb-6 lg:text-sm xl:text-md">
                    <ChildCategory category={category || []} />
                </div>

                <div className="text-2xl lg:text-xl xl:text-2xl mb-6 cursor-pointer uppercase line-clamp-3">
                    <Link to={path} >
                        <Typography.Title level={4}>{title}</Typography.Title >
                    </Link>
                </div>
            </div>

            {/**Tom tat bai viet */}
            <div className="mb-6 mr-3 text-sm w-full">
                <p className="description_wrap pr-3">{description}</p>
            </div>

            {/**Icon and button */}
            <div className="flex justify-between items-center pr-3 w-full">
                <div
                    onClick={() => {
                        navigate(path);
                    }}
                    className="cursor-pointer bg-next-btn inline-block text-sm py-2 px-4 text-gray-50 uppercase hover:bg-gray-800 transition duration-500 ease-linear"
                >
                    ĐỌC NGAY
                </div>
                <div className="flex">
                    <Link to="#">
                        <div className="text-gray-300 m-2 hover:text-gray-600 transition ease-linear duration-500 cursor-pointer">
                            <ShareIcon className="w-6" />
                        </div>
                    </Link>
                    <Link to="#">
                        <div className="text-gray-300 m-2 hover:text-gray-600 transition ease-linear duration-500 cursor-pointer">
                            <HeartIcon className="w-6" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}




export default function Card({ data }) {
    const { media, last_publish, path } = data || {};
    return (
        <div className="w-full flex flex-col">
            {/* Image here */}
            <PostImage time={last_publish} path={path} media={media} />

            {/* Information card here and author*/}
            <div className="pt-8 pb-4 w-full h-full text-gray-700 md:flex md:flex-1">
                {/**information card */}
                <PostDescription post={data} />
            </div>
            {/**End infor here */}
        </div>
    )
}
