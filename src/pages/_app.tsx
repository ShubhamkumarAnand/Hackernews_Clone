import { ApolloProvider } from "@apollo/client";
import { type AppType } from "next/dist/shared/lib/utils";
import { client } from "~/lib/apollo/apolloClient";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <ApolloProvider client={client}>
        <Component {...pageProps} />;
      </ApolloProvider>
    </>
  );
};

export default MyApp;
