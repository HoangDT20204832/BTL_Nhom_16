import HomePage from "../pages/HomePage/HomePage"
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
import OrderPage from "../pages/OrderPage/OrderPage"
import ProductsPage from "../pages/ProductsPage/ProductsPage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"

>>>>>>> 1102743 (first commit)
=======
<<<<<<< HEAD
=======
import AddressUserPage from "../pages/AddressUserPage"
import BankUserPage from "../pages/BankUserPage"
>>>>>>> 3427d796e2ac7f912893cd8cb058a365504997a4
>>>>>>> af7818199995148691cc7717e48f1f14f6b72a01
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
<<<<<<< HEAD
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
<<<<<<< HEAD
        path: "/account",
        page: AccountPage,
        isShowHeader: true,
    },
    {
=======
>>>>>>> 3427d796e2ac7f912893cd8cb058a365504997a4
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
    },
    {
        path: '/details-order/:id',
        page: DetailsOrderPage,
        isShowHeader: true
    },
    {
<<<<<<< HEAD
=======
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
>>>>>>> 3427d796e2ac7f912893cd8cb058a365504997a4
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
=======
>>>>>>> 1102743 (first commit)
        path: '*',
        page: NotFoundPage,
        isShowHeader: false,
    }
]