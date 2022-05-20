import HomeLayout from "../layout/HomeLayout.vue";
import HomeComponent from "../components/home/HomeComponent.vue";

const HOME = "/home";

export default {
    HOMEROUTER: {
        path: "/home",
        component: HomeLayout,
        meta: { title: "Home", unAuthentication: true },
        children: [
            {
                path: HOME + "/homepage",
                component: HomeComponent,
                meta: { title: "Trang Chủ", unAuthentication: true },
                alias: ['/Trang-Chu', '/TrangChu'], // when you type any path in this array, it'll be go to the path "/home" and not change the component it just another name of router call alias

            }
        ]
    }
}