
import React from "react";
import Card from "./components/Card";
import CategorySelect from "./components/CategorySelect";
import { useLoaderData } from "react-router-dom";

// wrapper component
export default function BlogList() {


    const pageData = useLoaderData();
    const {
        tags,
        mainSlide,
        allBlogs,
        latestBlogs,
        currentCategory,
        testimonials,
    } = pageData || {};
    return (
        <div style={{ margin: "auto", maxWidth: "1200px" }}>
            <div className=" px-6 item mx-0 lg:px-20 w-full xl:px-0w-full mb-9">
                <CategorySelect
                    currentCategory={currentCategory}
                    placeholder="Select a subject"
                />
            </div>
            <div className="mb-10 lg:flex w-full">
                {(allBlogs || []).length > 0 ? (
                    <div className="md:grid md:grid-cols-3 md:gap-11">
                        {allBlogs.map((post) => (
                            <div key={post.id} className="mb-5 md:mb-0 flex bg-black bg-opacity-[0.04]">
                                <Card data={post} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center mb-10">
                        Chưa có bài viết nào trong mục này !
                    </div>
                )}
            </div>
        </div>
    );
}
