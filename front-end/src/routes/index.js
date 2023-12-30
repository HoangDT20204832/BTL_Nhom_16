import HomePage from "../pages/HomePage/HomePage"
import OrderPage from "../pages/OrderPage"
import ProductsPage from "../pages/ProductsPage/ProductsPage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"
import AccountPage from "../pages/AccountPage"
import TypeProductPage from "../pages/TypeProductPage"
import SignInPage from "../pages/SignInPage"
import SignUpPage from "../pages/SignUpPage"
import ProductPageDetail from "../pages/ProductPageDetail"
import AdminPage from "../pages/AminPage"
import PaymentPage from "../pages/PaymentPage"
import OrderSuccess from "../pages/OrderSuccess"
import MyOrderPage from "../pages/MyOrderPage"
import DetailsOrderPage from "../pages/DetailsOrderPage"
import AddressUserPage from "../pages/AddressUserPage"
import BankUserPage from "../pages/BankUserPage"
import PasswordUserPage from "../pages/PasswordUserPage copy"
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
        path: '/product/:type',
        page: TypeProductPage,
        isShowHeader: true,
    },
    {
        path: "/product-detail/:id",
        page: ProductPageDetail,
        isShowHeader: true,
    },
    {
        path: '/payment',
        page: PaymentPage,
        isShowHeader: true,
    },
    {
        path: '/orderSuccess',
        page: OrderSuccess,
        isShowHeader: true,
    },
    {
        path: '/my-order',
        page: MyOrderPage,
        isShowHeader: true,
        isShowNavbar: true

    },
    {
        path: '/details-order/:id',
        page: DetailsOrderPage,
        isShowHeader: true
    },
    {
        path: "/account",
        page: AccountPage,
        isShowHeader: true,
        isShowNavbar: true
    },
    {
        path: "/account/address",
        page: AddressUserPage,
        isShowHeader: true,
        isShowNavbar: true
    },
    {
        path: "/account/bank",
        page: BankUserPage,
        isShowHeader: true,
        isShowNavbar: true
    },
    {
        path: "/account/password",
        page: PasswordUserPage,
        isShowHeader: true,
        isShowNavbar: true
    },
    {
        path: "/sign-in",
        page: SignInPage,
        isShowHeader: false,
    },
    {
        path: "/sign-up",
        page: SignUpPage,
        isShowHeader: false,
    },
    {
        path: "/system/admin",
        page: AdminPage,
        isShowHeader: true,
        isPrivate: true,
    },
    {
        path: '*',
        page: NotFoundPage,
        isShowHeader: false,
    }
]