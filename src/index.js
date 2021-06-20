import * as display from './display' // 验证
import * as manipulate from './manipulate' // 操作
import * as operate from './getSet' // 取值/赋值
import * as parse from './parse' // 解析
import * as query from './query' // 查询
import * as other from './other' // 其他
export default {
    ...display,
    ...manipulate,
    ...operate,
    ...parse,
    ...query,
    ...other
}
