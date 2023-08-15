export const signUpUser = async (credentials: any) => {
  const client = useSupabaseAuthClient();
  const router = useRouter();
  const { error } = await client.auth.signUp(credentials);
  return {
    error: error,
  };
};

export const signInUser = async (credentials: any) => {
  const client = useSupabaseAuthClient();
  const router = useRouter();
  const { error } = await client.auth.signInWithPassword(credentials);
  router.push("/");
  const navStore = useNavStore();
  navStore.setCurrentPage("");
  return {
    error: error,
  };
};

export const signOutUser = async () => {
  const client = useSupabaseAuthClient();
  const router = useRouter();
  const { error } = await client.auth.signOut();
  if (!error) {
    const navStore = useNavStore();
    navStore.setCurrentPage("");
    router.push("/login");
  } else {
    return alert("Something went wrong !");
  }
};
