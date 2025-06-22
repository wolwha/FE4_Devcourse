export async function generateMetadata({
  params,
}: {
  params: Promise<{ comment: string }>;
}) {
  const { comment } = await params;
  return {
    title: `comment - ${comment}`,
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>comment header</header>
      {children}
      <footer>comment footer</footer>
    </>
  );
}
// 서로 다른 레이아웃의 페이지가 필요하면 새로운 레이어를 만들면 된다.
// 컴포넌트는 가장 가까이에 있는 레이아웃부터 태워지기 시작한다.
// metadata가 두 레이아웃에 정의되어 있다면, 해당 컴포넌트와 가장 가까이에 있는 루트의 레이아웃의 메타데이터가 적용된다.
// page 컴포넌트에서 가장 가까이 있는 메타데이터가 적용이 되므로 페이지 컴포넌트에 메타데이터가 있다면 그 데이터가 먼저 적용된다.
// 함수명은 generateMetadata를 무조건 틀리지 않고 써야한다.
