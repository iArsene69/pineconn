export default defineNuxtRouteMiddleware(async (to, from) => {
  const {authenticatedData, initAuth, useAuthToken, useAuthUser} = useAuth();
  const {authUser, authToken} = await authenticatedData();

  console.log(authUser, authToken);

  if(to.path === "/"){
    if(!authToken){
      return navigateTo('/login')
    }
  }

  if (["/login", "/register"].includes(to.path)) {
    if (authToken) {
      return navigateTo("/")
    }
  }

});
