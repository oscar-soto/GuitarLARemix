export const getGuitar = async () => {
  const url = `${process.env.API_URL}/guitars?populate=guitar_imagen`;

  const resp = await fetch(url);
  const result = await resp.json();

  return result;
};
