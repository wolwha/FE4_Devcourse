export default function template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <input type="text" className="border-1" />
    </>
  );
}
// template는 라우트 전환 시 리렌더링의 영향을 받게 하고 싶을 때 사용
