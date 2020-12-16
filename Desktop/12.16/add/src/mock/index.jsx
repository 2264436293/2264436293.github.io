let Mock=require('mockjs')
Mock.mock('/api/list',{
    'data|10':[
        {
            name:"@cname",
            title:"@ctitle",
            img:"@image(100x100,@color)"
        
        }
    ]
})