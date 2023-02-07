import React from "react";
import { Link } from "react-router-dom";

const colors = ["#1d39c4", "#d4380d", "#c41d7f", "#cf1322", "#d46b08", "#389e0d", "#096dd9", "#d48806", "#d4b106", "#7cb305", "#08979c", "#096dd9", "#531dab"]

function getColorFromTag(name) {
    const index = name.split("").reduce((a, b) => a + b.charCodeAt(0), 0) % colors.length;
    return colors[index];
}

export default function Tags({ tags }) {
    return (
        <div className="w-full">
            <div className="flex flex-wrap gap-3">
                {tags.map((tag) => (
                    <Link href={`/tag/${tag.path}`} key={tag.id}>
                        <span className=" cursor-pointer text-xs bg-gray-100 py-2 px-4 hover:bg-gray-800 hover:text-gray-50 transition duration-500"
                            style={{
                                color: getColorFromTag(tag.name),
                                backgroundColor: getColorFromTag(tag.name) + "1a",
                                borderColor: getColorFromTag(tag.name) + "80",
                                borderWidth: "1px",
                                borderStyle: "solid",
                            }}>
                            #{tag.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
}