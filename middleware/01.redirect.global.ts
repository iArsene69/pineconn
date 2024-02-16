export default defineNuxtRouteMiddleware(async (to, from) => {
  const auth = useAuth();
  await auth.authenticatedData()

  console.log(auth.authToken.value, auth.authUser.value);

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
