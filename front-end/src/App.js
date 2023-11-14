import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routers } from "./routes";
import DefaultComponent from "./components/DefaultComponent/DefaultComponent";
import GlobalStyles from "./components/GlobalStylesComp";

function App() {
  return (
    <GlobalStyles>
      <div>
        <Router>
          <Routes>
            {routers.map((route) => {
              //những trang nào có isShowHeader = true thì sẽ có HeaderComponent
              const Layout = route.isShowHeader ? DefaultComponent : Fragment;
              return (
                <Route
                  key={route.path}
                  //path: chỉ đường dẫn hướng tới trang của element={<Page/>}
                  path={route.path}
                  // element để chỉ trang hiển thị
                  element={
                    <Layout>
                      <route.page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </Router>
      </div>
    </GlobalStyles>
  );
}

export default App;
