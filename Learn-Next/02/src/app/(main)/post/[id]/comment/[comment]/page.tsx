import { notFound } from "next/navigation";

export default async function page({
  params,
}: {
  params: Promise<{ id: string; comment: string }>;
}) {
  // 파라미터를 가져올 떄 비동기로 가져오기 위해 async
  // URL을 기본적으로 모두 문자열이다.
  // id 동적 세그먼트에도 접근할 수 있다.
  // 상위 컴포넌트에서는 하위 컴포넌트의 동적 세그먼트 값에 접근할 수 없다.
  // 중첩된 세그먼트의 폴더명이 같으면 안된다.
  const { comment } = await params;
  const random = Math.floor(Math.random() * 2); // 0, 1
  if (random === 1) throw new Error(`random is ${random}`); // random이 1이면 에러를 던진다.
  const { id } = await params;
  if (Number(comment) > 10) notFound();
  return (
    <>
      <h1>
        {id}, {comment} comment page Component
      </h1>
    </>
  );
}
