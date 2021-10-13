import _axios from './axios'

// 总体、价格
export const getJgztdList = params =>
_axios.get('carbonEmission/getJgztdList', { params })

// 买卖方信息
export const getMmcpxxList = params =>
_axios.get('carbonEmission/getMmcpxxList', { params })

// 碳排行业分布
export const getTpjyhyfbList = params =>
_axios.get('carbonEmission/getTpjyhyfbList', { params })

// 碳排交易统计
export const getTpjytjList = params =>
_axios.get('carbonEmission/getTpjytjList', { params })




// 企业碳账户  - 新接口
export const getJyxxList = params =>
_axios.get('carbonEmission/getJyxxList', { params })

// 光项目碳减排核准  - 新接口
export const getJyFgxmtjphzList = params =>
_axios.get('carbonEmission/getJyFgxmtjphzList', { params })

// 分地区交易量  - 新接口
export const getJyFdqjylList = params =>
_axios.get('carbonEmission/getJyFdqjylList', { params })