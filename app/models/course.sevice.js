export const getCourse = async () => {
  const url = `${process.env.API_URL}/course?populate=imagen`;

  const resp = await fetch(url);
  const result = await resp.json();

  return result;
};