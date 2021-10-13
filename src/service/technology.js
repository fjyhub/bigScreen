import _axios from './axios'

export const provinceGetData = params =>
  // request.get('http://youth-info.xicp.net:18758/province/getData', { params })
  _axios.get('/api/province/getData', { params })



export const mapGetData = params => _axios.get('/api/city/getData', { params })

// 区域碳排放
export const getQytpf = params => _axios.get('/carbonEmission/getQytpf', { params })

// 地图碳排列表
export const getStDistList = params => _axios.get('/carbonEmission/getStDistList', { params })

// 碳排放分析
export const getTPJGList = params => _axios.get('/carbonEmission/getTPJGList', { params })

// 碳排放分析
export const getNydltpfList = params => _axios.get('/carbonEmission/getNydltpfList', { params })

// 检测
export const getQytpfjcList = params => _axios.get('/carbonEmission/getQytpfjcList', { params })

// 电力公司减排贡献
export const getDlgsjpgxList = params => _axios.get('/carbonEmission/getDlgsjpgxList', { params })

// 区域碳排放 - 新接口
export const getQjQytpfList = params => _axios.get('/carbonEmission/getQjQytpfList', { params })

// 碳减排贡献 - 新接口
export const getQjTjpgxList = params => _axios.get('/carbonEmission/getQjTjpgxList', { params })

// 地图数据 - 新接口
export const getQjDtsjList = params => _axios.get('/carbonEmission/getQjDtsjList', { params })


// 地图数据 - 新接口
export const getMapData = params => _axios.get('/carbonEmission/getMapData', { params })


//首页数据
export const getQjQytpfTjList = params => _axios.get('/carbonEmission/getQjQytpfTjList', { params })
