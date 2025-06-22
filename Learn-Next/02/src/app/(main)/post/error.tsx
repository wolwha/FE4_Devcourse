"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <>
      <h1>Post Error: {error.message}</h1>
      <button onClick={reload}>reset</button>
    </>
  );
}
// 에러도 에러가 발생한 컴포넌트와 가장 가까운 에러 컴포넌트를 띄운다.
