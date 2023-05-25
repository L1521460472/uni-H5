import request from '@/utils/requestUtil'
// 药品查询
export function getData(id) {
	return request({
		method: 'GET',
		url: '/prod-api/trace/barCode/' + id,
		header: {
			'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
		},
	})
}
// 验证查询prod-api/trace/barCode
export function getVerifyData(id) {
	return request({
		method: 'GET',
		url: '/prod-api/trace/barCode/verify/' + id,
		header: {
			'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
		},
	})
}
// 验证查询
export function getBarCodeData(id) {
	return request({
		method: 'GET',
		url: '/prod-api/trace/barCode/' + id,
		header: {
			'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
		},
	})
}

export function memberInfo() {
	return request({
		method: 'GET',
		url: '/prod-api/trace/barCode/verify/'
	})
}
