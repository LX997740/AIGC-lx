# 搜索

- 项目亮点
    搜索是一个比较难的,可以在面试的时候讲出来
- 全栈
    - 一点点前端 防抖和节流
    - 后端 
        - SQL posts LIKE `%${keyword}%`
        - 各种数据放入hadop 进行hadop相应规则的查询
        - ElasticSearch 全文检索 node
    - AIGC

- 数据?
    - 使用python 爬虫
    - 利用AIGC帮我们生成数据
    - 利用AIGC 爬虫生成数据
        - get_response
        - prompt? 电商网站 手机 50条信息
## 数据的清洗
- 使用pandas处理 AIGC生成的text文本 
    - split('\n')按换行符切割
    - pandas 提供了Dataframe 实例
        pd.DataFrame({"product_name"})  column_name
    - pd.head()
        默认给5条

- 把文本如何转换成向量  数学表达 openai提供embedding接口
    cosin 值

- openai 接口:Completion \ chat\ embedding
- embedding 
    openai 的新接口
    查看keyword+数据 都进行向量运算
    cosin_similarity 计算两个向量间的相似度 ->0 相同或相似的.
    相反的话 就是负值