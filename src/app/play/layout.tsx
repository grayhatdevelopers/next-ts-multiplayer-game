"use client";

import { useEffect, useState } from "react";
import LoadingRoom from "../components/loading-room";

import { insertCoin } from "playroomkit";

async function initializeSdk() {
  try {
    const baseUrlOptions =
      process.env.NODE_ENV === "development"
        ? {
            baseUrl: process.env.NEXT_PUBLIC_LOCAL_IP_ADDRESS,
          }
        : {};

    try {
      await insertCoin({
        ...baseUrlOptions,
      });
    } catch (error) {
      console.log(error);
      return { error };
    }
  } catch (error) {
    console.log(error);
    return { error };
  }
  return { error: undefined };
}

const PlayLayout = ({ children }: { children: any }) => {
  const [isSdkInitialized, setIsSdkInitialized] = useState(false);

  useEffect(() => {
    initializeSdk().then(() => {
      setIsSdkInitialized(true);
    });
  }, []);

  return (
    <div className="h-full bg-red-500 w-full flex items-center justify-center">
      {isSdkInitialized ? <div>{children}</div> : <LoadingRoom />}
    </div>
  );
};

export default PlayLayout;
