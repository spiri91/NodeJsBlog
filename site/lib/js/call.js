import * as consts from './constants';
import localRepo from './localStorageRepo';

let base = consts.backendApiAddress;

function handleResult(result) {
  if (!result.status) return;
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
  let res = await localRepo.get(smug);
  if (res) return res;

  return fetch(`${base}/smug/${smug}`)
    .then(handleResult)
    .then((x) => {
      localRepo.set(smug, x);
      return x;
    });
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
  if (navigator.onLine === false) return localRepo.getAll();

  if (pageNumber < 1) pageNumber = 1;

  let take = consts.pageSize;
  let skip = (pageNumber - 1) * consts.pageSize;

  return get(take, skip);
}

let incrementViews = (articleId) => {
  fetch(`${base}/${articleId}/incrementViews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  });
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

let getCount = async () => {
  let res = await fetch(`${base}/count`);

  return handleResult(res);
}

let search = async (titlePart) => {
  let res = await fetch(`${base}/search/${titlePart}`);

  return handleResult(res);
}

export default {
  post,
  put,
  getOneById,
  getPage,
  getOneBySmug,
  deleteIt,
  addComment,
  getCount,
  search,
  incrementViews
}