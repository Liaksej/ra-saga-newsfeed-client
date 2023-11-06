"use client";

import {
  Attachment,
  Image as Image2,
  NewsBunch,
  Size,
  Size2,
} from "@/redux/load/loadStateTypes";
import { useDispatch, useSelector } from "react-redux";
import { selectLoad } from "@/redux/load/loadSelectors";
import { useEffect } from "react";
import { loadFirstBunchOfData } from "@/redux/sagas/sagasActions";
import LoadingSpinner from "@/components/loadingSpinner";
import Image from "next/image";
import { getNewsUrl, getUrl, removeUrls } from "@/lib/utils";
import Link from "next/link";

export default function NewsFeed() {
  const { data, error, loading } = useSelector(selectLoad);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFirstBunchOfData());
  }, [dispatch]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="flex flex-col bg-gray-100 gap-2 items-center p-5">
      {data.map((newsItem: NewsBunch) => (
        <div
          className="flex flex-col gap-y-4 border bg-white md:w-1/2 lg:w-1/3 rounded p-5"
          key={newsItem.id}
        >
          <div>{new Date(newsItem.date * 1000).toLocaleString("ru")}</div>
          <div className="overflow-hidden text-ellipsis">
            {removeUrls(newsItem.text)}
          </div>
          {Boolean(getNewsUrl(newsItem)) && (
            <Link
              className="underline text-blue-400"
              href={getNewsUrl(newsItem) || "#"}
            >
              Ссылка
            </Link>
          )}
          {newsItem.attachments.some(
            (attackment: Attachment) =>
              attackment.type === "photo" || attackment.type === "link",
          ) && (
            <img
              src={getUrl(newsItem) || "https://via.placeholder.com/320x320"}
              alt="image"
              width="320"
            />
          )}
          <div className="flex justify-between">
            <div className="flex gap-2">
              <div className="flex gap-x-1">
                <Image
                  src="/favorite_FILL0_wght400_GRAD0_opsz24.svg"
                  alt="like"
                  width="24"
                  height="24"
                />
                <span>{newsItem.likes.count}</span>
              </div>
              <div className="flex gap-x-1">
                <Image
                  src="/chat_bubble_FILL0_wght400_GRAD0_opsz24.svg"
                  alt="comments"
                  width="24"
                  height="24"
                />
                <span>{newsItem.comments.count}</span>
              </div>
              <div className="flex gap-x-1">
                <Image
                  src="/reply_FILL0_wght400_GRAD0_opsz24.svg"
                  alt="reposts"
                  width="24"
                  height="24"
                />
                <span>{newsItem.reposts.count}</span>
              </div>
            </div>
            <div className="flex gap-x-1 justify-self-end">
              <Image
                src="/visibility_FILL1_wght400_GRAD0_opsz24.svg"
                alt="views"
                width="24"
                height="24"
              />
              <span>{newsItem.views.count}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
