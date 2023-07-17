export const responseHandler = (response) => {
  if (response.data.success) return response.data;
  throw new Error(response.data.message);
};
