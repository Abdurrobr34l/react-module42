import "./App.css";
import Container from "./components/container/Container";
import { navigationData } from "./components/header/navigationData";
// import Header from "./components/header/Header";
import CustomHeader from "./components/header/CustomHeader";
import PricingOpt from "./components/pricing/PricingOpt";
import { Suspense } from "react";
import ResultChart from "./components/resultChart/ResultChart";

const pricingPromise = fetch("PricingData.json").then(response => response.json());

function App() {
  return (
    <>
      <Container>
        <header>
          {/* <Header></Header> */}
          <CustomHeader navigationData={navigationData}></CustomHeader>
        </header>

        <main>
          <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
            <PricingOpt pricingPromise={pricingPromise}></PricingOpt>
          </Suspense>
          <ResultChart></ResultChart>
        </main>
      </Container>
    </>
  );
}

export default App;
