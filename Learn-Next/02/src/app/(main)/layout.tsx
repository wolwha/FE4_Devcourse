import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer/>
    </>
  );
}
// 서로 다른 레이아웃의 페이지가 필요하면 새로운 레이어를 만들면 된다.
