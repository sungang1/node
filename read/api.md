# zhihu
## db
- method : post
- 参数
  - limit   每次请求的条数
  - offset  从哪条数据开始请求..前端判断最后一条数据的id是什么
  - type    请求的类型  default、ascendup(点赞升序)、ascendcomment（评论升序）、descendup(点赞降序)、descendcomment(评论降序) 
  - dbName  数据库名称
  - range  0 (关闭范围查找)  1(gtup) 2(gtcomment) 3(lwup) 4(lwcomnment) 5(gtup、gtcomment)  6(gtup,lwcomment) 7(gtcomment、lwup) 8(lwcomment,lwup) 9(gtup,lwup) 10(gtcomment,lwcomment)
     - gtup(点赞数大于)
     - gtcomment(评论数大于)
     - lwup(点赞数小于)
     - lwcomment(评论数小于)