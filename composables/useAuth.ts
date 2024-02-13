import { jwtDecode } from "jwt-decode";
import type { User } from "~/server/global.types";

export default function () {
  const useAuthToken = () => useState<string>("auth_token");
  const useAuthUser = () => useState("auth_user");
  const useAuthLoading = () => useState("auth_loading", () => true);

  const setToken = (newToken: string) => {
    const authToken = useAuthToken();
    authToken.value = newToken;
  };

  const setUser = (newUser: any) => {
    const authUser = useAuthUser();
    authUser.value = newUser;
  };

  const setAuthLoading = (value: boolean) => {
    const authLoading = useAuthLoading();
    authLoading.value = value;
  };

  const login = ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    return new Promise(async (resolve, reject) => {
      try {
        console.log(username, password);
        const { data } = await useFetch("/api/auth/login", {
          method: "POST",
          body: {
            username,
            password,
          },
        });

        if (!data.value) throw new Error("Invalid data");
        setToken(data.value.access_token);
        setUser(data.value.user);
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  };

  const refreshToken = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await $fetch("/api/auth/refresh");

        if (!data) throw new Error("Invalid data");
        setToken(data.access_token);
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  };

  const getUser = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await useFetch("/api/auth/user", {
          headers: {
            Authorization: `Bearer ${useAuthToken().value}`,
          },
        });
        if (!data.value) throw new Error("Invalid data");
        setUser(data.value?.user);
        resolve(true);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  };

  const reRefreshAccessToken = () => {
    const authToken = useAuthToken();

    if (!authToken.value) return;

    const jwt = jwtDecode(authToken.value);
    if (!jwt.exp) return;

    const newRefreshTime = jwt.exp - 60000;

    setTimeout(async () => {
      await refreshToken();
      reRefreshAccessToken();
    }, newRefreshTime);
  };

  const initAuth = () => {
    return new Promise(async (resolve, reject) => {
      setAuthLoading(true);
      try {
        await refreshToken();
        await getUser();

        reRefreshAccessToken();

        resolve(true);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  };

  const getRefreshToken = async () => {
    const { data } = await useFetch("/api/auth/refresh");

    return data.value?.access_token;
  };

  const getAuthUser = async (token: string) => {
    const { data } = await useFetch("/api/auth/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data.value?.user;
  };

  const authenticatedData = async () => {
    let authToken: string | undefined;
    let authUser: any | undefined;

    const token = await getRefreshToken();
    // const user = await getAuthUser(token);
    authToken = token;
    // authUser = user;

    const refreshToken = () => {
      if (!authToken) return;
      const jwt = jwtDecode(authToken);
      if (!jwt.exp) return;
      const newRefreshTime = jwt.exp - 60000;
      setTimeout(async () => {
        const token = await getRefreshToken();
        authToken = token;
        refreshToken();
      });
    };

    return {
      authUser,
      authToken,
    };
  };

  const logout = () => {
    return new Promise(async (resolve, reject) => {
      try {
        await useFetch("/api/auth/logout", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${useAuthToken().value}`,
          },
        });

        setToken("");
        setUser(null);
        resolve(true);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  };

  return {
    login,
    useAuthUser,
    useAuthToken,
    initAuth,
    useAuthLoading,
    logout,
    authenticatedData,
  };
}
