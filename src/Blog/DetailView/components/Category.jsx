import { Link } from "react-router-dom";

export default function Category({ data }) {
    const mainCategory = data[0];
    const parentCategory = (data[0] || {}).parent
        ? data[0].parent
        : null;
    return (
        <div className="flex text-primary max-w-max">
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
