// const API_URL = import.meta.env.VITE_API_URL;

// const response = await fetch(`${API_URL}/api/products`);
// const data = await response.json();

// export async function apiRequest(path, options = {}) {
//   const token = localStorage.getItem("adminToken");

//   const response = await fetch(`${API_URL}${path}`, {
//     ...options,
//     headers: {
//       "Content-Type": "application/json",
//       ...(token ? { Authorization: `Bearer ${token}` } : {}),
//       ...options.headers,
//     },
//   });

//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || "Request failed");
//   }

//   return data;
// }




const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
  throw new Error("VITE_API_URL is missing in environment variables");
}

export async function apiRequest(path, options = {}) {
  const token = localStorage.getItem("adminToken");

  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Request failed");
  }

  return data;
}
