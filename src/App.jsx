import "./App.css";
import Container from "./components/container/Container";
import { navigationData } from "./components/header/navigationData";
// import Header from "./components/header/Header";
import CustomHeader from "./components/header/CustomHeader";
import PricingOpt from "./components/pricing/PricingOpt";

function App() {
  return (
    <>
      <Container>
        {/* <Header></Header> */}
        <CustomHeader navigationData={navigationData}></CustomHeader>
        <PricingOpt></PricingOpt>
      </Container>
    </>
  );
}

export default App;
