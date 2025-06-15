import Footer from "@/components/Footer";

export const metadata = {
  title: "Iqbal | About"
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
