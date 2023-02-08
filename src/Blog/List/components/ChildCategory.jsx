import React from "react";
import { Link } from "react-router-dom";

export default function ChildCategory({ category }) {
    const mainCategory = category[0];
    const parentCategory = (category[0] || {}).parent
        ? category[0].parent
        : null;
    return (
        <div className="flex">
            {parentCategory ? (
                <>
                    <Link to={`/blog?category=${parentCategory.path}`} state={{
                        categoryId: parentCategory.id
                    }}>
                        <div className="cursor-pointer hover:text-gray-800 transition duration-300 ease-linear">
                            {parentCategory.name}
                        </div>
                    </Link>
                    <span> / </span>
                </>
            ) : (
                ""
            )}
            {mainCategory ? (
                <>
                    <Link to={`/blog?category=${mainCategory.path}`} state={{
                        categoryId: mainCategory.id
                    }}>
                        <div className="cursor-pointer hover:text-gray-800 transition duration-300 ease-linear">
                            {mainCategory.name}
                        </div>
                    </Link>
                </>
            ) : (
                ""
            )}
        </div>
    );
}