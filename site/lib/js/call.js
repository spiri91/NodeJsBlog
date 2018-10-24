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

let get = (take, skip) => fetch(`${base}/dtos/${take}/${skip}`);

let getOneById = (id) => fetch(`${base}/id/${id}`);

let getOneBySmug = (smug) => fetch(`${base}/id/${id}`);

let put = (id, article, token) => fetch(`${base}/${id}`, {
  method: "PUT",
  body: JSON.stringify(article),
  headers: {
    "auth": token,
    "Content-Type": "application/json; charset=utf-8"
  }
});

let deleteIt = (id, token) => fetch(`${base}/${id}`, {
  method: "DELETE",
  headers: {
    "auth": token,
    "Content-Type": "application/json; charset=utf-8"
  }
});

let getPage = function (pageNumber) {
  if (pageNumber < 1) pageNumber = 1;

  let take = consts.pageSize;
  let skip = (pageNumber - 1) * consts.pageSize;

  return get(take, skip);
}

let addComment = function (articleId, comment) {
  return fetch(`${base}/${articleId}/comments`, {
    method: "POST",
    body: JSON.stringify(comment),
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  })
}

export default {
  post,
  put,
  getOneById,
  getPage,
  getOneBySmug,
  deleteIt,
  addComment
}