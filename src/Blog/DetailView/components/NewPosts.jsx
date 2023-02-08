import React from "react";
import { Avatar, Divider, List, Typography } from "antd";
import { convertDateTime, resolveImagePath } from "../../../app/shared/utils";
import { Link } from "react-router-dom";

function BlogItem({ postInfo: data, index }) {
    const { title, path, media, last_publish } = data || {};
    const { url, alt } = media || {};
    return (
        <div className="flex items-center mb-4">
            {/**Image here */}
            <div className="cursor-pointer mr-4">
                <Link to={`/blog/${path}`}>
                    <div className="flex relative">
                        <div className="relative w-20 xl:w-20 rounded-full border border-product-border overflow-hidden  flex items-center justify-center">
                            <Avatar
                                className='w-full h-full'
                                alt={alt}
                                size={80}
                                preview={false}
                                shape="circle"
                                src={resolveImagePath(url)}
                            />
                        </div>
                    </div>
                </Link>
            </div>

            {/**content */}
            <div className="">
                <div className="line-clamp-2 break-words mb-2 cursor-pointer uppercase">
                    <Link to={`/blog/${path}`}>
                        <Typography.Text>{title}</Typography.Text>
                    </Link>
                </div>
                <div className="text-sm text-gray-700">
                    <Typography.Text>
                        {convertDateTime(last_publish)}
                    </Typography.Text>
                </div>
            </div>
        </div>
    );
}



export default function NewBlogs({ blogs }) {
    return (
        <div className="w-full ">
            <Typography.Title level={2} style={{
                lineHeight: "20px",
                fontSize: "16px",
                margin: "0px",
                marginBottom: "20px",
            }}>
                More from us
            </Typography.Title>
            {/* 
            {blogs.map((blog, index) => {
                return (
                    <div key={index} className="w-full"
                        style={{ display: index + 1 > 2 ? "none" : "block" }}
                    >
                        <BlogItem index={index + 1} postInfo={blog} />
                        <Divider style={{ display: index + 1 === blogs.length ? "none" : "block" }} />
                    </div>
                );
            })} */}

            <List dataSource={blogs}
                itemLayout="vertical"
                renderItem={(item, index) => (
                    <List.Item key={item.path}>
                        <BlogItem index={index + 1} postInfo={item} />
                    </List.Item>
                )}
            />
        </div >
    );
}

