import axios from "axios";
import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routers } from "./routes";
import DefaultComponent from "./components/DefaultComponent/DefaultComponent";
import GlobalStyles from "./components/GlobalStylesComp";
import {
  useQuery,
} from '@tanstack/react-query'

function App() {
  
  // useEffect(() =>{
  //   fetchApi()
  // }, [])

//   console.log("process.env.REACT_API_URL", process.env.REACT_APP_API_URL)
//   const fetchApi = async () =>{
//     const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/get-all-product`)
//     return res.data
//   }
// const query = useQuery({ queryKey: ['todos'], queryFn: fetchApi })
// console.log("query", query)


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
