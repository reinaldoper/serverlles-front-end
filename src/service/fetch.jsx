export const employees = async (options, func) => {
  const url = `https://creative-alpaca-c36ba7.netlify.app/.netlify/functions/${func}`;
  const request = await fetch(url, options);
  const response = await request.json();
  return response;
};