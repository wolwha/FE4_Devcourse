export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
  // id인 이유: 동적 세그먼트의 폴더명이 id여서
}) {
  const { id } = await params;
  return (
    <>
      <h1>{id}page Component</h1>
      {/* 폴더에 대괄호를 붙이면 동적 라우팅으로 작동한다. */}
      {/* Next.js의 모든 컴포넌트는 서버 컴포넌트이다. */}
    </>
  );
}

// 동적 세그먼트도 중첩이 가능하다.
// 의미 있는 경로의 폴더는 소괄호를 이용하여 폴더명을 지정해 묶을 수 있다. 소괄호로 되어 있는 폴더는 라우트 경로에 영향을 주지 않는다.
