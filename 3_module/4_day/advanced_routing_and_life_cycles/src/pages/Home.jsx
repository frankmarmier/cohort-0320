import React from "react";

function Home(props) {
  return (
    <div>
      <h1>React Routing</h1>
      <section>
        <p>
          In order to enable navigation within your React application <br />
          you will need to use the react router dom library.
        </p>
        <code>npm i react-router-dom</code>
        <p>
          In order to use it, you will need to navigation to your index.js
          <br />
          Then <b>import {"{ BrowserRouter }"} from "react-router-dom"</b>
          <br />
          Wrap your app around this component
          <br />
          <code>
            {`<BrowserRouter>`} <br />
          </code>
          <code>
            {`<App/>`} <br />
          </code>
          <code>
            {`</BrowserRouter>`} <br />
          </code>
        </p>
        <p>
          Once that is done, you can now use the Switch and Route components in
          App.js
        </p>
      </section>
    </div>
  );
}

export default Home;
