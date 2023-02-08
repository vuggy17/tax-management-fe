import customBlockStyle from "./style.css?inline";
import edjsParser from "editorjs-parser";
import { getFallBackImage, resolveImagePath } from "../../app/shared/utils";
function addStr(str, index, stringToAdd) {
  return (
    str.substring(0, index) + stringToAdd + str.substring(index, str.length)
  );
}

function makeBoldHeader(content) {
  const { blocks } = content;

  if (!blocks) return [];
  let newBlocks = [...blocks];
  blocks.forEach((block, index) => {
    if (block.type === "header") {
      let newBlockData = {
        ...block.data,
        text: `<div style="color:#444;font-size:23px">${block.data.text}<div>`,
      };
      newBlocks[index] = { ...block, data: newBlockData };
    }
  });
  return { ...content, blocks: newBlocks };
}

const customParser = {
  customImage: (data, config) => {
    if (data.file.url == undefined) {
      return `
      <div class="flex w-full justify-center border border-product-border border-solid">
        <img class="ant-image-img max-h-[200px] max-w-full object-cover" lazy src="${getFallBackImage()}" alt="Image could not load" />
      </div>
        <div class="w-full text-center italic text-md">${data.caption}</div>
        `;
    }
    return `
    <div class="flex w-full justify-center border border-product-border border-solid">
      <img class="ant-image-img max-h-[500px] max-w-full object-cover" src="${resolveImagePath(
        data.file.url
      )}" alt="${data.alt}" />
    </div>
      <div class="w-full text-center italic text-md">${data.caption}</div>
      `;
  },
  paragraph: (data) => {
    console.log("data ne", data);
    return `
      <p class="my-5" style="text-align:${data.alignment} ">${data.text}</p>
      `;
  },
  raw: (data) => {
    const customStyleForIframe = ` style="width:100%;height:450px" `;
    let newHTML;
    if (data.html.includes("<iframe")) {
      const indexToAdd = data.html.indexOf("<iframe ") + 8;
      newHTML = addStr(data.html, indexToAdd, customStyleForIframe);
    } else {
      newHTML = data.html;
    }
    return `
      <div class="max-w-full overflow-y-scroll">${newHTML}</div>
      `;
  },
  quote: (data, string) => {
    return `
      <blockquote class="${customBlockStyle.customBlockquote}">
        <div class="${customBlockStyle.customBlockquote__wrapper}">
          <i class="bx bxs-quote-alt-left"></i>
          <p>${data.text}</p>
        </div>
        </blockquote>
      `;
  },
};

const parser = new edjsParser(undefined, customParser, undefined);

export default parser;
export const parserUtils = {
  makeBoldHeader,
};
