export default () => {
  const replyThread = useState("reply_thread", () => null);
  const auth = useAuth();

  const postThreadModal = useState("post_thread_modal", () => false);
  const replyToId = useState<number | null>("reply_to_id", () => null);

  const openThreadModal = (threadId: number) => {
    postThreadModal.value = true;
    replyToId.value = threadId;
  };

  const getThreads = async (params = {}) => {
    try {
      const data = await $fetch("/api/threads", {
        method: "GET",
        params,
        headers: {
          Authorization: `Bearer ${auth.authToken.value}`,
        },
      });

      console.log(data);
      return data;
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

    return $fetch("/api/status/thread", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${auth.authToken.value}`,
      },
      body: form,
    });
  };

  return {
    getThreads,
    postThread,
  };
};
