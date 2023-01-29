export const getPosts = async () => {
  const url = `${process.env.API_URL}/posts?populate=imagen`;

  const resp = await fetch(url);
  const result = await resp.json();

  return result;
};

export const getPost = async (name) => {
  const url = `${process.env.API_URL}/posts?filters[url]=${name}&populate=imagen`;

  const resp = await fetch(url);
  const result = await resp.json();
  return result;
};
