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
      <h1>Error: {error.message}</h1>
      <button onClick={reload}>reset</button>
    </>
  );
}
// 서버 컴포넌트는 데이터 페칭에만 쓰임
// use client를 사용하여 클라이언트 컴포넌트로 선언
// use client를 사용하면 커스텀 훅 등의 명령어를 사용 가능
// useRouter는 next/navigation을 사용하기
// next/router는 페이지 라우터에서 사용(next13)
// reset은 사실상 그렇게 많이 사용되지는 않는다.
