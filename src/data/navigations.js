import Grid from '../assets/icons/grid.svg'
import Box from '../assets/icons/box.svg'
import ShoppingBag from '../assets/icons/shoppingBag.svg'
import Customers from '../assets/icons/customer.svg'
import Transactions from '../assets/icons/transaction.svg'
import Messages from '../assets/icons/message.svg'
import Settings from '../assets/icons/settings.svg'
import Help from '../assets/icons/help.svg'
import SignOut from '../assets/icons/sign-out.svg'
const sidebarLinks = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    path: '/',
    icon: Grid
  },
  {
    key: 'products',
    label: 'Products',
    path: '/products',
    icon: Box
  },
  {
    key: 'orders',
    label: 'Orders',
    path: '/orders',
    icon: ShoppingBag
  },
  {
    key: 'customers',
    label: 'Customers',
    path: '/customers',
    icon: Customers
  },
  {
    key: 'transactions',
    label: 'Transactions',
    path: '/transactions',
    icon: Transactions
  },
  {
    key: 'messages',
    label: 'Messages',
    path: '/messages',
    icon: Messages
  }
]

const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: 'settings',
    label: 'Settings',
    path: '/settings',
    icon: Settings
  },
  {
    key: 'support',
    label: 'Help & Support',
    path: '/support',
    icon: Help
  }
]

export { sidebarLinks, DASHBOARD_SIDEBAR_BOTTOM_LINKS }
