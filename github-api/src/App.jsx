import React from "react";
import Layout from "./components/layout";

function App() {
  return(
  <main>
    <Layout>
      <div>
        <img src="https://avatars.githubusercontent.com/u/61668558?v=4" alt='Avatar of User'/>
        <h1>Gabriel Lumertz</h1>
        <h3>Username:</h3>
        <span>gabriel-lumertz</span>
        <div>
          <h4>Followers</h4>
          <span>2</span>
        </div>
        <div>
          <h4>Starreds</h4>
          <span>2</span>
        </div>
        <div>
          <h4>Followings</h4>
          <span>2</span>
        </div>
      </div>
      <div>Repositories</div>
      <div>Starreds</div>
    </Layout>
  </main>
  )
}

export default App;
