import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import { cars } from "@/utils/data";

export default function App() {
  return (
    <div>
      <Header />

      <Main name="Sonya" age={25} cars={cars} />
      <Footer />
    </div>
  )
}