import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import WizardBrowser from "./WizardBrowser";

import "./App.css";

// Pass your GraphQL endpoint to uri
const client = new ApolloClient({ uri: "/graphql" });

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <div className="App-inner">
            <div className="App-header">
              Welcome to your brand new GRelDAL App
            </div>
            <div className="App-banner">
              <h2 className="Section-header">Next Steps:</h2>
              <ul>
                <li>
                  Learn more about{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://graphql.org/"
                  >
                    GraphQL
                  </a>
                </li>
                <li>
                  Learn more about{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.apollographql.com/"
                  >
                    Apollo
                  </a>
                </li>
                <li>
                  Learn more about{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://gql-dal.github.io/greldal/"
                  >
                    GRelDAL
                  </a>
                </li>
                <li>
                  Learn more about{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://reactjs.org/"
                  >
                    React
                  </a>
                </li>
              </ul>
            </div>
            <div className="App-body">
              <h2 className="Section-header">
                Below is an example React component that talks to your GraphQL
                backend
              </h2>
              <WizardBrowser />
            </div>
          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
