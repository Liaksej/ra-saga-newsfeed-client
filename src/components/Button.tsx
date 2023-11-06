"use client";

import { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLoad } from "@/redux/load/loadSelectors";
import { loadNextBunchOfData } from "@/redux/sagas/sagasActions";
export default function Button({ children }: { children: ReactNode }) {
  const { allContentLoaded, data, loadingMore } = useSelector(selectLoad);
  const dispatch = useDispatch();

  const lastBunchId = data[data.length - 1]?.id;

  if (allContentLoaded || data.length === 0) {
    return null;
  }
  return (
    <button
      className="text-gray-500 px-2 py-0.5 rounded hover:bg-gray-200"
      type="button"
      onClick={() => dispatch(loadNextBunchOfData(lastBunchId))}
    >
      {loadingMore ? (
        <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-gray-500"></div>
      ) : (
        children
      )}
    </button>
  );
}
