import HomePage from "../pages/HomePage/HomePage"
import OrderPage from "../pages/OrderPage/OrderPage"
import ProductsPage from "../pages/ProductsPage/ProductsPage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"
import AccountPage from "../pages/AccountPage"
import TypeProductPage from "../pages/TypeProductPage"
import SignInPage from "../pages/SignInPage"
import SignUpPage from "../pages/SignUpPage"
import ProductPageDetail from "../pages/ProductPageDetail"
export const routers = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true,
    },
    {
        path: '/order',
        page: OrderPage,
        isShowHeader: true,
    },
    {
        path: '/products',
        page: ProductsPage,
        isShowHeader: true,
    },
    {
        path: '/:type',
        page: TypeProductPage,
        isShowHeader: true,
    },
    {
        path: "/product-detail",
        page: ProductPageDetail,
        isShowHeader: true,
    },
    {
        path: "/account",
        page: AccountPage,
        isShowHeader: true,
    },
    {
        path: "/sign-in",
        page: SignInPage,
        isShowHeader: true,
    },
    {
        path: "/sign-up",
        page: SignUpPage,
        isShowHeader: true,
    },
    {
        path: '*',
        page: NotFoundPage,
        isShowHeader: false,
    }
]