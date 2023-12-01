# 后端数据逻辑

- 查询
    - 数据库.collection(name).get()
    - where 条件
    - count 计数
        - 当注册时 name+password
        - {total} = await where({name}).count()
        - it(total>=0){return}
    - limit 限制返回数量
        - 第5页 .offset((page-1)*size).limit(size)
    - 