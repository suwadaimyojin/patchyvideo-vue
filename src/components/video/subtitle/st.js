import axios from "axios";

export const list = async (vid) => {
  return (
    await axios({
      method: "post",
      url: "/be/subtitles/list_for_video.do",
      data: {
        vid,
      },
    })
  ).data.data.items;
};

export const get = async (subid) => {
  return (
    await axios({
      method: "post",
      url: "/be/subtitles/get_single.do",
      data: {
        subid,
      },
    })
  ).data.data.item;
};

export const upload = async (vid, lang, format, content) => {
  return (
    await axios({
      method: "post",
      url: "/be/subtitles/post_subtitle.do",
      data: {
        vid,
        lang,
        format,
        content,
      },
    })
  ).data?.data?.subid;
};