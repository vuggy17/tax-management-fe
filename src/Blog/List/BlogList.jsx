
import React, { useCallback, useEffect } from "react";
import Card from "./components/Card";
import CategorySelect from "./components/CategorySelect";
import { useLoaderData, useLocation, useSearchParams } from "react-router-dom";

// wrapper component
export default function BlogList() {
    const pageData = useLoaderData();
    const { state } = useLocation();

    const {
        tags,
        mainSlide,
        allBlogs,
        latestBlogs,
        currentCategory,
        testimonials,
        categories
    } = pageData || {};

    const [filteredBlogs, setFilteredBlogs] = React.useState(allBlogs || []);
    const filterBlogs = useCallback((categoryId) => {
        const STATIC_EMPTY_CATEGORY_ID = 8; // 8 in database, this change if it's db id changes

        const blogsWithCategory = allBlogs.filter((blog) => {
            if (categoryId === STATIC_EMPTY_CATEGORY_ID) {
                return blog.category.length === 0;
            } else if (categoryId > -1) {
                return blog.category.some(c => c.id === categoryId);
            } else {
                return true;
            }

        });
        setFilteredBlogs(blogsWithCategory);
    }, [allBlogs])


    useEffect(() => {
        if (state?.categoryId) {
            filterBlogs(state.categoryId)
        }
    }, [state])

    return (
        <div style={{ margin: "auto", maxWidth: "1200px" }}>
            <div className=" item mx-0 mb-9 pt-10">
                <CategorySelect
                    options={categories}
                    currentCategory={{ id: state?.categoryId}}
                    placeholder="Select a subject"
                    onChange={(value, option) => {
                        console.log('value selected: ', value)
                        console.log('option selected: ', option)
                        filterBlogs(value)
                    }}
                />
            </div>
            <div className="mb-10 lg:flex w-full">
                {(filteredBlogs || []).length > 0 ? (
                    <div className="md:grid md:grid-cols-3 md:gap-11">
                        {filteredBlogs.map((post) => (
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
