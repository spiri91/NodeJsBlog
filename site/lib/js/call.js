import * as consts from './constants';

let base = consts.backendApiAddress;

let post = (article, token) => fetch(base, {
  method: "POST",
  body: JSON.stringify(article),
  headers: {
    "auth": token,
    "Content-Type": "application/json; charset=utf-8"
  }
})

let get = (take, skip) => {
  let url = `${base}/dtos/${take}/${skip}`;
  return fetch(url);
}

let put = (id, article, token) => {
  let url = `${base}/${id}`;

  return fetch(url, {
    method: "PUT",
    body: JSON.stringify(article),
    headers: {
      "auth": token,
      "Content-Type": "application/json; charset=utf-8"
    }
  });
}

let deleteIt = (id, token) => {
  let url = `${base}/${id}`;

  return fetch(url, {
    method: "DELETE",
    headers: {
      "auth": token,
      "Content-Type": "application/json; charset=utf-8"
    }
  });
}

export default {
  post,
  put,
  get,
  deleteIt
}