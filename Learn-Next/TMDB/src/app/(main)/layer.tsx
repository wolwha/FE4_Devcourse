import Footer from "../components/common/footer";
import Header from "../components/common/header";

export default function layer({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
