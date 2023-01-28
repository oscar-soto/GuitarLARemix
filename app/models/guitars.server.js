export const getGuitars = async () => {
  const url = `${process.env.API_URL}/guitars?populate=guitar_imagen`;

  const resp = await fetch(url);
  const result = await resp.json();

  return result;
};

export const getGuitar = async (name) => {
  const url = `${process.env.API_URL}/guitars?filters[url]=${name}&populate=guitar_imagen`;

  const resp = await fetch(url);
  const result = await resp.json();
  return result;
};
