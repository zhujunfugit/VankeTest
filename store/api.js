/*
  store api
*/
 
import Vue from 'vue';
import axios from 'axios';
import { API } from './config';

/*
  url get
*/
function _get(url) {
  return new Promise((resolve, reject) => {
    axios.get(url).then((res) => {
     resolve(res.data)
    }, reject)
  });
}

/*
  api get
*/
export function get(path) {
  return _get(path)
}

/*
  url post
*/
function _post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params).then((res) => {
      resolve(res.data)
    }, reject)
  })
}

/*
  api post
*/
export function post(path, params) {
  return _post(path, params)
}

/*
  url delete
*/
function _delete(url) {
  return new Promise((resolve, reject) => {
    axios.delete(url).then((res) => {
      resolve(res.data)
    }, reject)
  }); 
}

/*
  api delete
*/
export function deleteR(path) {
  return _delete(path)
}

/*
  url put
*/
function _put(url, params) {
  return new Promise((resolve, reject) => {
    axios.put(url, params).then((res) => {
      resolve(res.data)
    }, reject)
  })
}

/*
  api put
*/
export function put(path, params) {
  return _put(path, params)
}


/**download post */
function _download(url, params, config) {
  return new Promise((resolve, reject) => {
    axios.post(url, params, config).then((res) => {
      resolve(res)
    }, reject)
  })
}

/*
  api download post
*/
export function download(path, params, config) {
  return _download(path, params, config)
}
