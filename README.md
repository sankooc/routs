# routs

基于JSON的路由配置方案

## 目标

* 直观的路由配置
* 方便测试
* 自动生成前端服务模板(angular, redux ...) [WIP]


## 安装

` npm i routs `

## 配置

[demo](example)

yoeman scaffold: [asn](https://github.com/sankooc/generator-asn)


### 路由配置

| field     | value  | optional | routing/router |      desc       |   
|-----------|--------|----------|----------------|-----------------|
| path      | string |   false  |   true/true    |   routing path  |
| filters   | string |   true   |   true/true    | route filtering |
| routes    | array  |   false  |  false/true    |   sub routing   |
| match     | string |   false  |  true/false    | routing handle  |




## 生成模板代码

### angular1 service

` ng1 [config file] [folder] `