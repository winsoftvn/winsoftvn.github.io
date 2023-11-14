import { Routes, Route, useLocation } from "react-router-dom";
import PageWeb from "./routes";
import LayoutPageLogin from "./layouts/LayoutPageLogin";
import LayoutPageMain from "./layouts/LayoutPageMain";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
    const location = useLocation();

    return (
        <>
            <Routes
            // location={location} key={location.pathname}
            >
                {PageWeb.map((route, index) => {
                    const Page = route.page;
                    let Layout = LayoutPageLogin;
                    if (route.isMainLayout) {
                        Layout = LayoutPageMain;
                    }
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
            <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <ToastContainer />
        </>
    );
}

export default App;
