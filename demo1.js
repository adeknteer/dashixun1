const Mock=require('mockjs')

const data = Mock.mock({
    'memberList|4':[
        {
            'id|':1,
            'name|1-3':'小姐姐',
            'phone|11':'8',
            'age|1-120':1,
            'salary|6000-8000.1-3':0,
        }
    ]
})
console.log(JSON.stringify(data,null,6))
