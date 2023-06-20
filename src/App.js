import './App.css';
import {Products} from "./components/Products/Products";
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {ProductsPage} from "./pages/ProductsPage";
import {ProductInfoPage} from "./pages/ProductInfoPage";
import {BasketPage} from "./pages/BasketPage";

function App() {

    // const func = async () => {
    //
    //     const res = await axiosService.get(baseURL);
    //     console.log(res);
    // };
    //
    // func();

    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'products'}/>}/>
                <Route path={'products'} element={<ProductsPage/>}/>
                <Route path={'product/:productId'} element={<ProductInfoPage/>}/>
                <Route path={'basket'} element={<BasketPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
