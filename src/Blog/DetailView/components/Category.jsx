import { Link } from "react-router-dom";

// const categoryInfo = [
//   {
//     id: 86,
//     name: "category 3",
//     description: null,
//     parent: {
//       id: 85,
//       name: "category 2",
//       description: null,
//       parent_id: 84,
//       allow_sub: true,
//       path: "category-2",
//       createdAt: "2021-08-17T08:06:57.000Z",
//       updatedAt: "2021-08-17T08:06:57.000Z",
//     },
//   },
// ];

export default function Category({ data }) {
    const mainCategory = data[0];
    const parentCategory = (data[0] || {}).parent
        ? data[0].parent
        : null;
    return (
        <div className="flex text-primary max-w-max">
            {parentCategory ? (
                <>
                    <Link to={`/category/${parentCategory.path}`}>
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
                    <Link to={`/category/${mainCategory.path}`}>
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
