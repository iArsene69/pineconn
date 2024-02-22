export default defineNuxtRouteMiddleware(async (to, from) => {
  const auth = useAuth();
  await auth.authenticatedData()

  if(to.path === "/"){
    if(!auth.authToken.value){
      return navigateTo('/login')
    }
  }

  if (["/login", "/register"].includes(to.path)) {
    if (auth.authToken.value) {
      return navigateTo("/")
    }
  }

});
