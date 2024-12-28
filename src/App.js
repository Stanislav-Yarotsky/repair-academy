import Layout from "./components/Layout/Layout";
import Hero from "./components/Hero/Hero";
import "./styles/base.css";

function App() {
  return (
    <Layout>
      <Hero isPromoActive={true} />
    </Layout>
  );
}

export default App;
