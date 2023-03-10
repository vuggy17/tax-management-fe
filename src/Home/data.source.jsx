import { Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
export const Nav30DataSource = {
  wrapper: { className: "header3 home-page-wrapper jzih1dpqqrg-editor_css" },
  page: { className: "home-page" },
  logo: {
    className:
      "header3-logo jzjgnya1gmn-editor_css flex w-full justify-center items-center h-full",
    children:
      "https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*-J8NSLj9rbsAAAAAAAAAAABkARQnAQ",
  },
  Menu: {
    className: "header3-menu",
    children: [
      // {
      //   name: "item1",
      //   className: "header3-item",
      //   children: {
      //     href: "#",
      //     children: [
      //       {
      //         children: (
      //           <span>
      //             <span>
      //               <p>Find tax</p>
      //             </span>
      //           </span>
      //         ),
      //         name: "text",
      //       },
      //     ],
      //   },
      //   subItem: [
      //     {
      //       className: "item-sub",
      //       children: {
      //         className: "item-sub-item jzj8295azrs-editor_css",
      //         children: [
      //           {
      //             name: "image0",
      //             className: "item-image jzj81c9wabh-editor_css",
      //             children:
      //               "https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*4_S6ToPfj-QAAAAAAAAAAABkARQnAQ",
      //           },
      //         ],
      //       },
      //       name: "sub~jzj8hceysgj",
      //     },
      //   ],
      // },
      // {
      //   name: "item2",
      //   className: "header3-item",
      //   children: {
      //     href: "#",
      //     children: [
      //       {
      //         children: (
      //           <span>
      //             <p>
      //               Tax Declaration
      //               <br />
      //             </p>
      //           </span>
      //         ),
      //         name: "text",
      //       },
      //     ],
      //   },
      // },
    ],
  },
  mobileMenu: { className: "header3-mobile-menu" },
};
export const Banner50DataSource = {
  wrapper: { className: "home-page-wrapper banner5" },
  page: { className: "home-page banner5-page" },
  childWrapper: {
    className: "banner5-title-wrapper",
    children: [
      {
        name: "title",
        children: (
          <span>
            <p>Công cụ</p>
            <p>quản lý thuế cá nhân</p>
          </span>
        ),
        className: "banner5-title",
      },
      {
        name: "explain",
        className: "banner5-explain",
        children: (
          <span>
            <span>
              <span>
                <span>
                  <p>
                    Dễ dàng tra cứu, quản lý
                    <br />
                  </p>
                </span>
              </span>
            </span>
          </span>
        ),
      },
      {
        name: "content",
        className: "banner5-content",
        children: (
          <span>
            <span>
              <p>
                Tra cứu thông tin, quy định về các loại thuế cá nhân
              </p>
              <p>
                Thực hiện khai báo và hoàn tất nghĩa vụ thế nhanh chóng
              </p>
            </span>
          </span>
        ),
      },
      {
        name: "button",
        className: "banner5-button-wrapper",
        children: {
          className: "banner5-button",
          type: "primary",
          children: (
            <span>
              {/* <p> */}
              <Link
                to="quick-start"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Bắt đầu
              </Link>
              {/* </p> */}
            </span>
          ),
        },
      },
    ],
  },
  image: {
    className: "banner5-image",
    children:
      "https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*-wAhRYnWQscAAAAAAAAAAABkARQnAQ",
  },
};
export const Feature60DataSource = {
  wrapper: { className: "home-page-wrapper feature6-wrapper" },
  OverPack: { className: "home-page feature6", playScale: 0.3 },
  Carousel: {
    className: "feature6-content",
    dots: false,
    wrapper: { className: "feature6-content-wrapper" },
    titleWrapper: {
      className: "feature6-title-wrapper",
      barWrapper: {
        className: "feature6-title-bar-wrapper",
        children: { className: "feature6-title-bar" },
      },
      title: { className: "feature6-title" },
    },
    children: [
      {
        title: {
          className: "feature6-title-text",
          children: (
            <span>
              <p>We helped last year</p>
            </span>
          ),
        },
        className: "feature6-item",
        name: "block0",
        children: [
          {
            md: 8,
            xs: 24,
            className: "feature6-number-wrapper",
            name: "child0",
            number: {
              className: "feature6-number",
              unit: {
                className: "feature6-unit",
                children: (
                  <span>
                    <p>Business</p>
                  </span>
                ),
              },
              toText: true,
              children: "116",
            },
            children: {
              className: "feature6-text",
              children: (
                <span>
                  <p>Satisfied on our service</p>
                </span>
              ),
            },
          },
          {
            md: 8,
            xs: 24,
            className: "feature6-number-wrapper",
            name: "child1",
            number: {
              className: "feature6-number",
              unit: {
                className: "feature6-unit",
                children: (
                  <span>
                    <span>
                      <span>
                        <span>
                          <p>Prize</p>
                        </span>
                      </span>
                    </span>
                  </span>
                ),
              },
              toText: true,
              children: "1.17",
            },
            children: {
              className: "feature6-text",
              children: (
                <span>
                  <p>Internationnal awards</p>
                </span>
              ),
            },
          },
          {
            md: 8,
            xs: 24,
            className: "feature6-number-wrapper",
            name: "child2",
            number: {
              className: "feature6-number",
              unit: {
                className: "feature6-unit",
                children: (
                  <span>
                    <span>
                      <p>Billion&nbsp;</p>
                    </span>
                  </span>
                ),
              },
              toText: true,
              children: "2.10",
            },
            children: {
              className: "feature6-text",
              children: (
                <span>
                  <span>
                    <p>Of money we were helped to caculate&nbsp;</p>
                  </span>
                </span>
              ),
            },
          },
        ],
      },
      // {
      //   title: {
      //     className: "feature6-title-text",
      //     children: (
      //       <span>
      //         <p>Today tax caculation</p>
      //       </span>
      //     ),
      //   },
      //   className: "feature6-item",
      //   name: "block1",
      //   children: [
      //     {
      //       md: 8,
      //       xs: 24,
      //       name: "child0",
      //       className: "feature6-number-wrapper",
      //       number: {
      //         className: "feature6-number",
      //         unit: { className: "feature6-unit", children: "万" },
      //         toText: true,
      //         children: "116",
      //       },
      //       children: { className: "feature6-text", children: "模型数据" },
      //     },
      //     {
      //       md: 8,
      //       xs: 24,
      //       name: "child1",
      //       className: "feature6-number-wrapper",
      //       number: {
      //         className: "feature6-number",
      //         unit: { className: "feature6-unit", children: "亿" },
      //         toText: true,
      //         children: "1.17",
      //       },
      //       children: { className: "feature6-text", children: "模型迭代数量" },
      //     },
      //     {
      //       md: 8,
      //       xs: 24,
      //       name: "child2",
      //       className: "feature6-number-wrapper",
      //       number: {
      //         className: "feature6-number",
      //         unit: { className: "feature6-unit", children: "亿" },
      //         toText: true,
      //         children: "2.10",
      //       },
      //       children: { className: "feature6-text", children: "训练样本数量" },
      //     },
      //   ],
      // },
    ],
  },
};
export const Feature70DataSource = {
  wrapper: { className: "home-page-wrapper feature7-wrapper" },
  page: { className: "home-page feature7" },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: "feature7-title-wrapper",
    children: [
      {
        name: "title",
        className: "feature7-title-h1",
        children: (
          <span>
            <p>Thông tin các loại thuế</p>
            <p>Và quy định liên quan tới thuế</p>
          </span>
        ),
      },
    ],
  },
  blockWrapper: {
    className: "feature7-block-wrapper",
    gutter: 24,
    children: [
      {
        md: 6,
        xs: 24,
        name: "block0",
        className: "feature7-block",
        children: {
          className: "feature7-block-group",
          children: [
            {
              name: "image",
              className: "feature7-block-image",
              children:
                "https://gw.alipayobjects.com/zos/basement_prod/e339fc34-b022-4cde-9607-675ca9e05231.svg",
            },
            {
              name: "title",
              className: "feature7-block-title",
              children: (
                <span>
                  <p>Provide Our Clients World</p>
                  <p>Class Services At Reasonable</p>
                  <p>Prices.</p>
                </span>
              ),
            },
            {
              name: "content",
              className: "feature7-block-content",
              children: (
                <span>
                  <span>
                    <p>
                      We listen and effectively respond to your needs and those
                      of your
                    </p>
                    <p>
                      clients, We ate experts at translating those needs into
                      solutions.
                    </p>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        md: 6,
        xs: 24,
        name: "block1",
        className: "feature7-block",
        children: {
          className: "feature7-block-group",
          children: [
            {
              name: "image",
              className: "feature7-block-image",
              children:
                "https://gw.alipayobjects.com/zos/basement_prod/e339fc34-b022-4cde-9607-675ca9e05231.svg",
            },
            {
              name: "title",
              className: "feature7-block-title",
              children: (
                <span>
                  <span>
                    <span>
                      <p>Provide Our Clients World</p>
                      <p>Class Services At Reasonable</p>
                      <p>Prices.</p>
                    </span>
                  </span>
                </span>
              ),
            },
            {
              name: "content",
              className: "feature7-block-content",
              children: (
                <span>
                  <span>
                    <p>
                      We listen and effectively respond to your needs and those
                      of your
                    </p>
                    <p>
                      clients, We ate experts at translating those needs into
                      solutions.
                    </p>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        md: 6,
        xs: 24,
        name: "block2",
        className: "feature7-block",
        children: {
          className: "feature7-block-group",
          children: [
            {
              name: "image",
              className: "feature7-block-image",
              children:
                "https://gw.alipayobjects.com/zos/basement_prod/e339fc34-b022-4cde-9607-675ca9e05231.svg",
            },
            {
              name: "title",
              className: "feature7-block-title",
              children: (
                <span>
                  <p>Provide Our Clients World</p>
                  <p>Class Services At Reasonable</p>
                  <p>Prices.</p>
                </span>
              ),
            },
            {
              name: "content",
              className: "feature7-block-content",
              children: (
                <span>
                  <p>
                    We listen and effectively respond to your needs and those of
                    your
                  </p>
                  <p>
                    clients, We ate experts at translating those needs into
                    solutions.
                  </p>
                </span>
              ),
            },
          ],
        },
      },
      {
        md: 6,
        xs: 24,
        name: "block3",
        className: "feature7-block",
        children: {
          className: "feature7-block-group",
          children: [
            {
              name: "image",
              className: "feature7-block-image",
              children:
                "https://gw.alipayobjects.com/zos/basement_prod/e339fc34-b022-4cde-9607-675ca9e05231.svg",
            },
            {
              name: "title",
              className: "feature7-block-title",
              children: (
                <span>
                  <p>Provide Our Clients World</p>
                  <p>Class Services At Reasonable</p>
                  <p>Prices.</p>
                </span>
              ),
            },
            {
              name: "content",
              className: "feature7-block-content",
              children: (
                <span>
                  <p>
                    We listen and effectively respond to your needs and those of
                    your
                  </p>
                  <p>
                    clients, We ate experts at translating those needs into
                    solutions.
                  </p>
                </span>
              ),
            },
          ],
        },
      },
      {
        md: 6,
        xs: 24,
        name: "block4",
        className: "feature7-block",
        children: {
          className: "feature7-block-group",
          children: [
            {
              name: "image",
              className: "feature7-block-image",
              children:
                "https://gw.alipayobjects.com/zos/basement_prod/e339fc34-b022-4cde-9607-675ca9e05231.svg",
            },
            {
              name: "title",
              className: "feature7-block-title",
              children: (
                <span>
                  <p>Provide Our Clients World</p>
                  <p>Class Services At Reasonable</p>
                  <p>Prices.</p>
                </span>
              ),
            },
            {
              name: "content",
              className: "feature7-block-content",
              children: (
                <span>
                  <p>
                    We listen and effectively respond to your needs and those of
                    your
                  </p>
                  <p>
                    clients, We ate experts at translating those needs into
                    solutions.
                  </p>
                </span>
              ),
            },
          ],
        },
      },
      {
        md: 6,
        xs: 24,
        name: "block5",
        className: "feature7-block",
        children: {
          className: "feature7-block-group",
          children: [
            {
              name: "image",
              className: "feature7-block-image",
              children:
                "https://gw.alipayobjects.com/zos/basement_prod/e339fc34-b022-4cde-9607-675ca9e05231.svg",
            },
            {
              name: "title",
              className: "feature7-block-title",
              children: (
                <span>
                  <p>Provide Our Clients World</p>
                  <p>Class Services At Reasonable</p>
                  <p>Prices.</p>
                </span>
              ),
            },
            {
              name: "content",
              className: "feature7-block-content",
              children: (
                <span>
                  <p>
                    We listen and effectively respond to your needs and those of
                    your
                  </p>
                  <p>
                    clients, We ate experts at translating those needs into
                    solutions.
                  </p>
                </span>
              ),
            },
          ],
        },
      },
      {
        md: 6,
        xs: 24,
        name: "block6",
        className: "feature7-block",
        children: {
          className: "feature7-block-group",
          children: [
            {
              name: "image",
              className: "feature7-block-image",
              children:
                "https://gw.alipayobjects.com/zos/basement_prod/e339fc34-b022-4cde-9607-675ca9e05231.svg",
            },
            {
              name: "title",
              className: "feature7-block-title",
              children: (
                <span>
                  <p>Provide Our Clients World</p>
                  <p>Class Services At Reasonable</p>
                  <p>Prices.</p>
                </span>
              ),
            },
            {
              name: "content",
              className: "feature7-block-content",
              children: (
                <span>
                  <p>
                    We listen and effectively respond to your needs and those of
                    your
                  </p>
                  <p>
                    clients, We ate experts at translating those needs into
                    solutions.
                  </p>
                </span>
              ),
            },
          ],
        },
      },
      {
        md: 6,
        xs: 24,
        name: "block7",
        className: "feature7-block",
        children: {
          className: "feature7-block-group",
          children: [
            {
              name: "image",
              className: "feature7-block-image",
              children:
                "https://gw.alipayobjects.com/zos/basement_prod/e339fc34-b022-4cde-9607-675ca9e05231.svg",
            },
            {
              name: "title",
              className: "feature7-block-title",
              children: (
                <span>
                  <p>Provide Our Clients World</p>
                  <p>Class Services At Reasonable</p>
                  <p>Prices.</p>
                </span>
              ),
            },
            {
              name: "content",
              className: "feature7-block-content",
              children: (
                <span>
                  <p>
                    We listen and effectively respond to your needs and those of
                    your
                  </p>
                  <p>
                    clients, We ate experts at translating those needs into
                    solutions.
                  </p>
                </span>
              ),
            },
          ],
        },
      },
    ],
  },
};
export const Feature00DataSource = {
  wrapper: { className: "home-page-wrapper content0-wrapper" },
  page: { className: "home-page content0" },
  OverPack: { playScale: 0.3, className: "" },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "title",
        children: (
          <span>
            <p>Chủ đề</p>
          </span>
        ),
      },
    ],
  },
  childWrapper: {
    className: "content0-block-wrapper",
    children: [
      {
        name: "block0",
        className: "jzjn8afnsxb-editor_css content0-block",
        md: 6,
        xs: 24,
        children: {
          className: "content0-block-item jzjgrrupf2c-editor_css",
          children: [
            {
              name: "image",
              className: "content0-block-icon jzjgrlz134-editor_css",
              children:
                "https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*CTp8T7RT-VkAAAAAAAAAAABkARQnAQ",
            },
            {
              name: "title",
              className: "content0-block-title jzj8xt5kgv7-editor_css",
              children: (
                <span>
                  <span>
                    <p>Thuế thu nhập cá nhân</p>
                  </span>
                </span>
              ),
            },
          
          ],
        },
      },
      {
        name: "block1",
        className: "content0-block",
        md: 6,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon jzjncn210ql-editor_css",
              children:
                "https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*CTp8T7RT-VkAAAAAAAAAAABkARQnAQ",
            },
            {
              name: "title",
              className: "content0-block-title jzjne54fwqm-editor_css",
              children: (
                <span>
                  <span>
                    <p>Thuế VAT</p>
                  </span>
                </span>
              ),
            },
            
          ],
        },
      },
      {
        name: "block2",
        className: "content0-block",
        md: 6,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon jzjndq0dueg-editor_css",
              children:
                "https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*CTp8T7RT-VkAAAAAAAAAAABkARQnAQ",
            },
            {
              name: "title",
              className: "content0-block-title jzjne24af8c-editor_css",
              children: (
                <span>
                  <p>Thuế hàng hoá đặc biệt</p>
                </span>
              ),
            },
            
          ],
        },
      },
      {
        name: "block~jzjn87bmyc7",
        className: "content0-block",
        md: 6,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon jzjndsyw8sf-editor_css",
              children:
                "https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*CTp8T7RT-VkAAAAAAAAAAABkARQnAQ",
            },
            {
              name: "title",
              className: "content0-block-title jzjndw5oerk-editor_css",
              children: (
                <span>
                  <p>Tổng hợp</p>
                </span>
              ),
            },
          
          ],
        },
      },
    ],
  },
};
export const Feature80DataSource = {
  wrapper: { className: "home-page-wrapper feature8-wrapper" },
  page: { className: "home-page feature8" },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: "feature8-title-wrapper",
    children: [
      { name: "title", className: "feature8-title-h1", children: "Khai báo thuế" },
      {
        name: "content",
        className: "feature8-title-content",
        children: "Thực hiện khai báo thuế tại nhà",
      },
    ],
  },
  childWrapper: {
    className: "feature8-button-wrapper",
    children: [
      {
        name: "button",
        className: "feature8-button",
        children: { href: "#", children: "Khai báo ngay" },
      },
    ],
  },
  Carousel: {
    dots: false,
    className: "feature8-carousel",
    wrapper: { className: "feature8-block-wrapper" },
    children: {
      className: "feature8-block",
      titleWrapper: {
        className: "feature8-carousel-title-wrapper",
        title: { className: "feature8-carousel-title" },
      },
      children: [
        {
          name: "block0",
          className: "feature8-block-row",
          gutter: 120,
          title: {
            className: "feature8-carousel-title-block",
            children: "Tax calculation process",
          },
          children: [
            {
              className: "feature8-block-col",
              md: 6,
              xs: 24,
              name: "child0",
              arrow: {
                className: "feature8-block-arrow",
                children:
                  "https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg",
              },
              children: {
                className: "feature8-block-child",
                children: [
                  {
                    name: "image",
                    className: "feature8-block-image",
                    children:
                      "https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg",
                  },
                  {
                    name: "title",
                    className: "feature8-block-title",
                    children: "Nộp chứng từ",
                  },
                  {
                    name: "content",
                    className: "feature8-block-content",
                    children: "Tải các chứng từ của bạn lên hệ thống",
                  },
                ],
              },
            },
            {
              className: "feature8-block-col",
              md: 6,
              xs: 24,
              name: "child1",
              arrow: {
                className: "feature8-block-arrow",
                children:
                  "https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg",
              },
              children: {
                className: "feature8-block-child",
                children: [
                  {
                    name: "image",
                    className: "feature8-block-image",
                    children:
                      "https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg",
                  },
                  {
                    name: "title",
                    className: "feature8-block-title",
                    children: "Xác minh chứng từ",
                  },
                  {
                    name: "content",
                    className: "feature8-block-content",
                    children:
                      "Cơ quan thuế sẽ xác minh chứng từ của bạn",
                  },
                ],
              },
            },
            {
              className: "feature8-block-col",
              md: 6,
              xs: 24,
              name: "child2",
              arrow: {
                className: "feature8-block-arrow",
                children:
                  "https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg",
              },
              children: {
                className: "feature8-block-child",
                children: [
                  {
                    name: "image",
                    className: "feature8-block-image",
                    children:
                      "https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg",
                  },
                  {
                    name: "title",
                    className: "feature8-block-title",
                    children: "Tính toán thuế",
                  },
                  {
                    name: "content",
                    className: "feature8-block-content",
                    children:
                      "Cơ quan thuế sẽ tính toán số tiền phải trả",
                  },
                ],
              },
            },
            {
              className: "feature8-block-col",
              md: 6,
              xs: 24,
              name: "child3",
              arrow: {
                className: "feature8-block-arrow",
                children:
                  "https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg",
              },
              children: {
                className: "feature8-block-child",
                children: [
                  {
                    name: "image",
                    className: "feature8-block-image",
                    children:
                      "https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg",
                  },
                  {
                    name: "title",
                    className: "feature8-block-title",
                    children: "Trả thông tin",
                  },
                  {
                    name: "content",
                    className: "feature8-block-content",
                    children:
                      "Dư nợ thuế sẽ được ghi nhận vào tài khoản của bạn",
                  },
                ],
              },
            },
          ],
        },
        {
          name: "block1",
          className: "feature8-block-row",
          gutter: 120,
          title: {
            children: "Tax reminder process",
            className: "feature8-carousel-title-block",
          },
          children: [
            {
              className: "feature8-block-col",
              md: 6,
              xs: 24,
              name: "child0",
              arrow: {
                className: "feature8-block-arrow",
                children:
                  "https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg",
              },
              children: {
                className: "feature8-block-child",
                children: [
                  {
                    name: "image",
                    className: "feature8-block-image",
                    children:
                      "https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg",
                  },
                  {
                    name: "title",
                    className: "feature8-block-title",
                    children: "Set a reminder",
                  },
                  {
                    name: "content",
                    className: "feature8-block-content",
                    children: "Set a reminder for your tax due date",
                  },
                ],
              },
            },
            {
              className: "feature8-block-col",
              md: 6,
              xs: 24,
              name: "child1",
              arrow: {
                className: "feature8-block-arrow",
                children:
                  "https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg",
              },
              children: {
                className: "feature8-block-child",
                children: [
                  {
                    name: "image",
                    className: "feature8-block-image",
                    children:
                      "https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg",
                  },
                  {
                    name: "title",
                    className: "feature8-block-title",
                    children: "Receive a reminder",
                  },
                  {
                    name: "content",
                    className: "feature8-block-content",
                    children:
                      "Receive a reminder from our tax experts before your tax due date",
                  },
                ],
              },
            },
            {
              className: "feature8-block-col",
              md: 6,
              xs: 24,
              name: "child2",
              arrow: {
                className: "feature8-block-arrow",
                children:
                  "https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg",
              },
              children: {
                className: "feature8-block-child",
                children: [
                  {
                    name: "image",
                    className: "feature8-block-image",
                    children:
                      "https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg",
                  },
                  {
                    name: "title",
                    className: "feature8-block-title",
                    children: "Pay tax",
                  },
                  {
                    name: "content",
                    className: "feature8-block-content",
                    children:
                      "Our system will automatically remind you to pay your tax",
                  },
                ],
              },
            },
            {
              className: "feature8-block-col",
              md: 6,
              xs: 24,
              name: "child3",
              arrow: {
                className: "feature8-block-arrow",
                children:
                  "https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg",
              },
              children: {
                className: "feature8-block-child",
                children: [
                  {
                    name: "image",
                    className: "feature8-block-image",
                    children:
                      "https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg",
                  },
                  {
                    name: "title",
                    className: "feature8-block-title",
                    children: "Happy work life",
                  },
                  {
                    name: "content",
                    className: "feature8-block-content",
                    children:
                      "You can focus on your work and leave the tax to us",
                  },
                ],
              },
            },
          ],
        },
      ],
    },
  },
};
export const Footer10DataSource = {
  wrapper: { className: "home-page-wrapper footer1-wrapper" },
  OverPack: { className: "footer1", playScale: 0.2 },
  block: {
    className: "home-page",
    gutter: 0,
    children: [
      {
        name: "block0",
        xs: 24,
        md: 8,
        title: {
          className: "logo jzl0qcpyjra-editor_css",
          children:
            "https://res.cloudinary.com/dkjhojumq/image/upload/v1675831601/samples/logo_leocrs.png",
        },
        childWrapper: {
          className: "slogan",
          children: [
            {
              children: <p>Calculate your tax liabilities</p>,
              name: "0title",
            },
          ],

        },
      },
      {
        name: "block2",
        xs: 24,
        md: 8,
        className: "block",
        title: { children: <p>Find us on Facebook</p> },
        childWrapper: {
          children: [
            {
              name: "image~jzl0tcm4f1d",
              className: "",
              children:
                "https://res.cloudinary.com/dkjhojumq/image/upload/c_scale,h_132/v1675828364/samples/uit-qr_hgtfiq.png",
            },
            {
              href: "#",
              name: "link0",
              children: <a href="https://www.uit.edu.vn/">
                <Typography.Text style={{
                  color: "#999"
                }}>https://www.uit.edu.vn</Typography.Text>
              </a>,
              className: "jzl0u1bko6-editor_css ",
            },
            { href: "#", name: "link1", children: "" },
          ],
        },
      },
      {
        name: "block3",
        xs: 24,
        md: 8,
        className: "block",
        title: { children: "Sponsored by" },
        childWrapper: {
          children: [
            { href: "#", name: "link0", children: "Ant Design" },
            { href: "#", name: "link1", children: "Ant Motion" },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: "copyright-wrapper" },
  copyrightPage: { className: "home-page" },
  copyright: {
    className: "copyright",
    children: (
      <span>
        <a href="http://abc.alipay.com">隐私权政策</a>&nbsp; &nbsp; &nbsp;
        |&nbsp; &nbsp; &nbsp; <a href="http://abc.alipay.com">权益保障承诺书</a>
        &nbsp; &nbsp; &nbsp;&nbsp;ICP证:浙B2-20100257&nbsp; &nbsp;
        &nbsp;&nbsp;Copyright © 2019 蚂蚁金融服务集团
        <br />
      </span>
    ),
  },
};
