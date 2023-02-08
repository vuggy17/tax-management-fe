import axios from "./api.config";

/**
 * get blogs data
 * @param {AbortSignal} cancelSignal
 * @returns complete data for blog list page
 */
export async function getBlogs(cancelSignal) {
  // const getTags = axios.get("landing/tag").then((res) => res.data);
  const getCategories = axios.get("landing/category").then((res) => res.data);
  // const getSlides = axios
  //   .get("landing/slide/allblog")
  //   .then((res) => {
  //     if (res.data.is_visible) {
  //       return res.data;
  //     } else return [];
  //   })
  //   .catch((error) => {
  //     return null;
  //   });
  const getBlogs = axios
    .get("landing/blog")
    .then((res) => res.data)
    .catch((error) => {
      return [];
    });
  // const getLatestBlogs = axios
  //   .get("landing/blog/new")
  //   .then((res) => res.data)
  //   .catch((error) => {
  //     return [];
  //   });
  // const getTestimonials = axios
  //   .get("landing/slide/testimonial")
  //   .then((res) => {
  //     if (res.data.is_visible) {
  //       return res.data;
  //     } else return [];
  //   })
  //   .catch((error) => {
  //     return null;
  //   });
  const response = await Promise.all([
    // getTags,
    // getSlides,
    getBlogs,
    // getLatestBlogs,
    // getTestimonials,
    getCategories,
  ])
    .then((...response) => {
      const allBlogs = response[0][0];
      const categories = response[0][1];
      // const tags = response[0][0];
      // const mainSlide = response[0][1];
      // const allBlogs = response[0][2];
      // const latestBlogs = response[0][3];
      // const testimonials = response[0][4];
      // const categories = response[0][5];
      return {
        allBlogs,
        categories,
      };
    })
    .catch((error) => {
      return null;
    });
  //
  return response;
}

export async function getBlogPage(path) {
  const getTags = axios
    .get("/landing/tag")
    .then((res) => res.data)
    .catch((error) => []);

  const getPostAndComment = axios
    .get(`landing/blog/${path}`)
    .then(async (res) => {
      let post = res.data;
      let comments = await axios
        .get(`landing/comment?blogId=${post.id}`)
        .then((res) => {
          return { ...res.data, id: post.id };
        })
        .catch((err) => []);
      return { post, comments };
    })
    .catch((error) => {
      return { post: null, comments: null };
    });
  const getLatestBlogs = axios
    .get("landing/blog/new")
    .then((res) => res.data)
    .catch((error) => []);

  // const getBlogProducts = axios
  //   .get(`landing/blog/${path}/product`)
  //   .then((res) => res.data)
  //   .catch((error) => []);

  const response = await Promise.all([
    getTags,
    getPostAndComment,
    getLatestBlogs,
    // getBlogProducts,
  ])
    .then((...response) => {
      const tags = response[0][0];
      const postAndComment = response[0][1];
      const latestBlogs = response[0][2];
      // const blogProducts = response[0][3];
      return {
        tags,
        latestBlogs,
        post: postAndComment.post,
        blogComments: postAndComment.comments,
        // blogProducts,
      };
    })
    .catch((error) => {
      return null;
    });
  return response;
}
