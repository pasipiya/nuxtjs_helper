export default defineNuxtRouteMiddleware((to, from) => {
    // if (to.params.id === '1') {
    //     return abortNavigation()
    // }
    // // In a real app you would probably not redirect every route to `/`
    // // however it is important to check `to.path` before redirecting or you
    // // might get an infinite redirect loop
    // if (to.path !== '/') {
    //     return navigateTo('/')
    // }
    const isLoggedIn = false // Example: a function or composable to check login status

    if (isLoggedIn) {
        // If the user is already logged in and trying to access login page, redirect to home page
        if (to.path === '/login') {
            return navigateTo('/')
        }
    } else {
        // If the user is not logged in and trying to access a protected page, redirect to login page
        if (to.path !== '/login') {
            return navigateTo('/login')
        }
    }
})
