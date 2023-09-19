import { Request } from "./axios";
export function getList () {
  return Request('/getList', {
    method: 'get',
    params: ''
  })
}