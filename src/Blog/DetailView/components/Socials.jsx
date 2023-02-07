import { TagIcon } from "@heroicons/react/solid";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import InstagramIcon from "@material-ui/icons/Instagram";
// import PinterestIcon from "@material-ui/icons/Pinterest";
import React from "react";
import { Link } from "react-router-dom";

function SocialIcon({ Icon, name }) {
  let color = "";
  switch (name) {
    case "facebook":
      color = "text-blue-500";
      break;
    case "instagram":
      color = "text-red-500";
      break;
    case "pinterest":
      color = "text-red-600";
      break;
    default:
      color = "text-black";
  }

  return (
    <div className="cursor-pointer">
      {Icon && (
        <Icon
          className={`${color} transition transform hover:text-black hover:scale-110`}
          style={{ fontSize: "32px " }}
        />
      )}
    </div>
  );
}

export default function Socials({ tags }) {
  return (
    <div className=" flex flex-col md:items-center text-xs text-gray-600">
      {/* <div className="w-60 mb-12 mx-auto">
        <CustomImage src={BrandImage} />
      </div> */}
      <div className="md:flex justify-between w-full items-center">
        <div className="flex flex-wrap items-center md:pb-0 pb-6">
          <TagIcon className="w-3.5 h-3.5 mr-2" />
          {tags &&
            tags.map((tag) => (
              <div
                key={tag.id}
                className={`my-1  transition-all duration-200   ${tags[tags.length - 1].name === tag.name ? "" : "mr-2"
                  }`}
              >
                <Link to={`/tag/${tag.path}`}>
                  <div className="hover:text-white hover:bg-black transition-all duration-500 bg-secondary py-1 px-2 normal-case cursor-pointer inline-block">
                    {tag.name}
                  </div>
                </Link>
              </div>
            ))}
        </div>
        <div className="flex items-center">
          <div className="uppercase text-sm mr-2">Share:</div>
          {/* <SocialIcon Icon={FacebookIcon} name="facebook" />
          <SocialIcon Icon={PinterestIcon} name="pinterest" />
          <SocialIcon Icon={InstagramIcon} name="instagram" /> */}
        </div>
      </div>
    </div>
  );
}

