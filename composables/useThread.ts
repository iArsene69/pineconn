export default () => {
  const replyThread = useState<{} | null>("reply_thread", () => null);
  const auth = useAuth();

  const postThreadModal = useState("post_thread_modal", () => false);
  const replyToId = useState<number | null>("reply_to_id", () => null);

  const openThreadModal = async (threadId: number) => {
    postThreadModal.value = true;
    replyToId.value = threadId;
  };

  const closeThreadModal = () => {
    postThreadModal.value = false;
  };

  const getThreadById = async () => {
    const data = await $fetch(`/api/threads/${replyToId.value}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${auth.authToken.value}`,
      },
    });

    console.log(data)

    return data;
  };

  const getThreads = async (params = {}) => {
    try {
      const {data: threads} = await useAsyncData("threads", () => $fetch("/api/threads", {
        method: "GET",
        params,
        headers: {
          Authorization: `Bearer ${auth.authToken.value}`,
        },
      }))

      return threads.value;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const postThread = (formData: any) => {
    const form = new FormData();

    form.append("thread", formData.thread);
    form.append("replyToId", formData.replyToId);

    formData.media.forEach((mda: string | Blob, idx: any) => {
      form.append(`media_${idx}`, mda);
    });

    return $fetch('/api/status/thread', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${auth.authToken.value}`,
      },
      body: form,
      async onResponse(){
        await refreshNuxtData('threads')
      }
    })
  };

  const giveLike = (threadId: number) => {
    return $fetch('/api/status/like', {
      headers: {
        Authorization: `Bearer ${auth.authToken.value}`,
      },
      body: {
        threadId
      },
      /// TODO: Make optimistic UI update
    })
  }

  return {
    getThreads,
    postThread,
    openThreadModal,
    closeThreadModal,
    postThreadModal,
    replyToId,
    replyThread,
    getThreadById,
    giveLike
  };
};
