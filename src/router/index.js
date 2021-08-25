import VueRouter from "vue-router";
import Home from "../components/Home"
import Listview from "../views/Listview"
import Searchpage from "../views/SearchPage"
import Login from "../components/Login"
import LoMin from "../components/LoMe"
import store from "../store";
import UserMusic from "../components/UserMusic"
import About from "../components/About"
import LoMe from "../components/LoMe"
import Sonelist from "../components/Sonelist"
//重定向的问题
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location, onResolve, onReject) {

    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)

    return originalPush.call(this, location).catch(err => err)

}
export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            redirect: "/Home",

        },
        {
            path: '/Home',
            name: "Home",
            component:
                Home

        },
        {
            name: "listview",
            path: "/listview",
            component: Listview
        },
        {
            name: "Searchpage",
            path: "/Searchpage",
            component: Searchpage
        },
        {
            name: "Login",
            path: "/login",
            component: Login
        },
        {
            name: "LoMin",
            path: "/loMin",
            component: LoMin,
            beforeEnter: (to, from, next) => {
                if (store.state.isLogin) {
                    next()
                } else {
                    if (from.name !== 'Login') {
                        next("/Login")

                    } else {
                      next()
                    }

                }

            }
        },
      
        {
         
            path: "/LoMe",
            component: LoMe,
            redirect:'/LoMe/UserMusic',
            children: [
                {
                    name: "LoMe",
                    path: "About",
                    component: About,
                    beforeEnter: (to, from, next) => {
                        if (to.name == "About") {
                             store.state.isShow = false
                             next()
                        } else {
                            store.state.isShow = false
                            next()
                        }
                    }
                },
                {
                    name: "UserMusic",
                    path: "UserMusic",
                    component: UserMusic,
                    beforeEnter: (to, from, next) => {
                        if (to.name == "UserMusic") {
                             store.state.isShow = true
                             next()
                        } else {
                             console.log('@@') 
                        }
                    }
                }
            ],
           
        },
     
        {
            name: "Sonelist",
            path: "/Sonelist",
            component: Sonelist,
        }
    ]
})