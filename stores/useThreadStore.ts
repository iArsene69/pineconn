import type { ShowThread } from "~/server/global.types";

export const useThreadStore = defineStore("threads", {
  state: () => {
    return {
      threads: [] as ShowThread[],
      replyId: null as number | null,
      isOpen: false as boolean
    };
  },

  getters: {
    getThreadById: (state) => {
      return state.threads.find((thread) => thread.id === state.replyId);
    },
  },

  actions: {
    async getThreads(params = {}) {
      try {
        const auth = useAuth();
        const data = await $fetch("/api/threads", {
          method: "GET",
          params,
          headers: {
            Authorization: `Bearer ${auth.authToken.value}`,
          },
        });

        this.threads = data.threads;
      } catch (error) {
        console.log(error);
        this.threads = [];
      }
    },

    openModal(threadId: number){
        //WIP
    }
  },
});
