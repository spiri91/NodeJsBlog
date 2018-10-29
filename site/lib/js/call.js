import * as consts from './constants';

let base = consts.backendApiAddress;

function handleResult(result) {
  if(!result.status) return;
  if (result.status > 204) throw new Error("eror, check console");
  if (result.status > 200) return {};

  return result.json();
}

let post = async (article, token) => {
  let res = await fetch(base, {
    method: "POST",
    headers: {
      'auth': token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(article),
  });

  return handleResult(res);
}
let get = async (take, skip) => {
  let res = await fetch(`${base}/dtos/${take}/${skip}`);

  return handleResult(res);
}

let getOneById = async (id) => {
  let res = await fetch(`${base}/id/${id}`);

  return handleResult(res);
}

let getOneBySmug = async (smug) => {
  let res = await fetch(`${base}/smug/${smug}`);

  return handleResult(res);
}
let put = async (id, article, token) => {
  let res = await fetch(`${base}/${id}`, {
    method: "PUT",
    headers: {
      "auth": token,
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify(article),
  });

  return handleResult(res);
}

let deleteIt = async (id, token) => {
  let res = await fetch(`${base}/${id}`, {
    method: "DELETE",
    headers: {
      "auth": token,
      "Content-Type": "application/json; charset=utf-8"
    }
  });

  return handleResult(res);
}

let getPage = async (pageNumber) => {
  if (pageNumber < 1) pageNumber = 1;

  let take = consts.pageSize;
  let skip = (pageNumber - 1) * consts.pageSize;

  return get(take, skip);
}

let addComment = async (articleId, comment) => {
  let res = await fetch(`${base}/${articleId}/comments`, {
    method: "POST",
    body: JSON.stringify(comment),
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  });

  return handleResult(res);
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