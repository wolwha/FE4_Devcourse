export default async function page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  return (
    <>
      <h1>{slug}page Component</h1>
    </>
    // ...: catch all 세그먼트. 리액트 라우터의 와일드카드와 비슷하다.
  );
}
