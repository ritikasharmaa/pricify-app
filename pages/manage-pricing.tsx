import * as React from "react";
import Layout from "../components/Layout";
import ManagePricing from "../components/ManagePricing";
import PriceTableContextProvider from "../contexts/PriceTableContext";

const ManagePricingPage = () => {
  return (
    <PriceTableContextProvider>
      <Layout>
        <ManagePricing />
      </Layout>
    </PriceTableContextProvider>
  );
};

export default ManagePricingPage;
