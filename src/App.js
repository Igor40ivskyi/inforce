import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {ProductsPage} from "./pages";
import {ProductInfoPage} from "./pages";
import {BasketPage} from "./pages";

function App() {

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
