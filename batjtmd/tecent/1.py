import openai
openai.api_key="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"
COMPLETION_MODEL = "text-davinci-003"  #模型常量 达芬奇

# 声明一个字符串模板
# 换行
# 描述细节需求
# 分步去执行
# 输出的格式

prompt ="""
Consideration product:工厂现货pvc充气青蛙夜市地摊热卖充气玩具发光娃儿童水上玩具
1.Compose human readable product title used on Amazon in english within 20 words
2.Write 5 selling points for the products in Amazon
3.Evaluat a price range for this product in U.S

OutPut the result in json format with three propreries called title,
selling_points and price_range
"""

# 定义函数
def get_response(prompt):
    completions = openai.Completion.create(
        engine = COMPLETION_MODEL,#模型
        prompt = prompt,#提示词
        max_tokens =  512, #省点钱
        n =1,#一条
        stop = None,
        temperature = 0.0 #自由发挥度0-2
    )
    print(completions)
    message = completions.choices[0].text 
    return message

print(get_response(prompt))

# {
#     title:"1",
#     selling_points:"",
#     price_range:"",
# }