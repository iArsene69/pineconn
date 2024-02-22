export default () => {
  const replyThread = useState("reply_thread", () => null);
  const auth = useAuth()

  const getThreads = async (params = {}) => {
    // return new Promise(async (resolve, reject) => {
    //   try {
    //     const data = await $fetch("/api/threads", {
    //       method: "get",
    //       params,
    //       headers: {
    //         'Authorization': `Bearer ${auth.authToken.value}`
    //       }
    //     });
    //     console.log(data)
    //     resolve(data);
    //   } catch (error) {
    //     reject(error);
    //   }
    // });

    try {
      const data = await $fetch("/api/threads", {
        method: 'GET',
        params,
        headers: {
          Authorization: `Bearer ${auth.authToken.value}`
        }
      })

      console.log(data)
      return data
    } catch (error) {
      console.log(error)
      return []
    }
  };

  return {
    getThreads
  }
};
