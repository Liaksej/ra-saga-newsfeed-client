import {
  Attachment,
  Image as Image2,
  NewsBunch,
  Size,
  Size2,
} from "@/redux/load/loadStateTypes";

export function removeUrls(text: string) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const textWithoutUrls1 = text.replace(/&#8594;/g, ":");
  const textWithoutUrls2 = textWithoutUrls1.replace(/&#128071;&#127995;/g, "");
  return textWithoutUrls2.replace(urlRegex, "");
}

export function getUrl(newsItem: NewsBunch) {
  let url;
  newsItem.attachments.find((attachment: Attachment) => {
    if (attachment.type === "link") {
      const photoSize = attachment.link?.photo?.sizes.find(
        (size: Size2) => size.width <= 320,
      );
      url = photoSize ? photoSize.url : "https://via.placeholder.com/320x320";
    }
    if (attachment.type === "photo") {
      const photo = attachment.photo?.sizes.find((size: Size) => {
        return size.width <= 320;
      });
      url = photo ? photo.url : "https://via.placeholder.com/320x320";
    }
    if (attachment.type === "video") {
      const image = attachment.video?.image?.find((size: Image2) => {
        return size.width <= 320;
      });
      url = image ? image.url : "https://via.placeholder.com/320x320";
    }
  });
  return url;
}

export function getNewsUrl(newsItem: NewsBunch) {
  let url;
  newsItem.attachments.find((attachment: Attachment) => {
    if (attachment.type === "link") {
      url = attachment.link?.url;
    }
  });
  return url;
}
