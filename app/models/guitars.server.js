export const getGuitar = async () => {
  const url = `${process.env.API_URL}/guitars?populate=imagen`;

  const resp = await fetch(url);
  const result = await resp.json();

  return result;
};
