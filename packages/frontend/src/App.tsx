import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

// Pass your GraphQL endpoint to uri
const client = new ApolloClient({ uri: "/graphql" });

import "./App.css";
import WizardBrowser from "./WizardBrowser";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <div className="App-inner">
            <div className="App-header">
              Welcome to your brand new GRelDAL App
            </div>
            <div className="App-body">
              <WizardBrowser />
            </div>
          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
