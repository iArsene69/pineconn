export default defineNuxtRouteMiddleware(async (to, from) => {
  const {authenticatedData} = useAuth();
  const {authUser, authToken} = await authenticatedData();

  console.log(authUser, authToken);

  if(!authToken && to.path!== "/login") {
    return navigateTo('/login')
  }

  if(authToken && to.path === "/login") {
    return navigateTo('/')
  }
});
