import React, { useState } from 'react'

import parser, { parserUtils } from './parser';
import { useLoaderData } from 'react-router-dom';
import ErrorPage from '../../error-page';
import NewBlogs from './components/NewPosts';
import Socials from './components/Socials';
import Tags from './components/Tags';
import Category from './components/Category';
import { resolveImagePath } from '../../app/shared/utils';
import { Affix, Typography } from 'antd';


function BlogContent({ data, tags }) {
  const { title, category, content, media } = data;
  let markup = "";
  try {
    let formatContent = JSON.parse(content);

    formatContent = parserUtils.makeBoldHeader(formatContent);
    markup = parser.parse(formatContent);
  } catch (error) {
    console.log(error);
  }
  return (
    <div className="w-full">
      <div className="w-full">
        <div className="max-w-max leading-10">
          <Category data={category || []} />
        </div>
        <Typography.Title level={1} className="text-xl sm:text-3xl my-5 mt-2 ">{title}</Typography.Title>
        <div className="mb-8">
          <Tags tags={tags || []} />
        </div>

        {/* cover image */}
        <div className="py-5">
          {media ? (
            <img
              className="w-full h-[196px] sm:h-[300px] object-cover"
              src={resolveImagePath(media?.url)}
              alt={media?.alt}
            />
          ) : (
            null
          )}
        </div>
      </div>
      <div
        className="leading-9 max-w-full"
        style={{ color: "#737373", fontSize: "16px" }}
      >
        <div dangerouslySetInnerHTML={{ __html: markup }} />
      </div>
    </div>
  );
}

export default function BlogDetailView() {
  const blogPost = useLoaderData();
  const { tags, post, blogComments, latestBlogs, blogProducts } =
    blogPost || {};

  // affix target 
  // @see https://4x.ant.design/components/affix/
  const [container, setContainer] = useState(null);
  if (!blogPost) return <ErrorPage />;

  return (
    <div>
      <div style={{ margin: "auto", maxWidth: "1200px" }} ref={setContainer}>
        <div className="px-6 item mx-0 lg:px-20 w-full xl:px-0 pb-[400px]">
          <div className="lg:grid lg:grid-cols-13 gap-10 min-h-screen">
            <div className="mb-0 md:col-span-9 pt-10">
              <div className="w-full">
                <BlogContent
                  tags={tags || []}
                  data={post ? post : { content: "<div>No content</div>" }}
                />
              </div>
            </div>
            <div className='pl-10 border-transparent border-l-product-border border border-solid md:col-span-4'>
              <Affix  >
                <div>
                  <div className="mb-16 pt-10">
                    <NewBlogs blogs={latestBlogs || []} />
                  </div>
                </div>
              </Affix>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};