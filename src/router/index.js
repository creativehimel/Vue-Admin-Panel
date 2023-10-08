import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Products from '../views/Products.vue'
import Orders from '../views/Orders.vue'
import Customers from '../views/Customers.vue'
import Transactions from '../views/Transactions.vue'
import Messages from '../views/Messages.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Settings from '../views/Settings.vue'
import HelpSupport from '../views/HelpSupport.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders
    },
    {
      path: '/customers',
      name: 'customers',
      component: Customers
    },
    {
      path: '/transactions',
      name: 'transactions',
      component: Transactions
    },
    {
      path: '/messages',
      name: 'messages',
      component: Messages
    },
    {
      path: '/setting',
      name: 'setting',
      component: Settings
    },
    {
      path: '/help-support',
      name: 'help-support',
      component: HelpSupport
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: Register
    }
  ]
})

export default router
