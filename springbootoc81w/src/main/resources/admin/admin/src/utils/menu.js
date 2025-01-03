const menu = {
    list() {
        return [{
            "backMenu": [{
                "child": [{
                    "appFrontIcon": "cuIcon-album",
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "用户",
                    "menuJump": "列表",
                    "tableName": "yonghu"
                }], "menu": "用户管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-pay",
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "卖家用户",
                    "menuJump": "列表",
                    "tableName": "maijiayonghu"
                }], "menu": "卖家用户管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-time",
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "图书分类",
                    "menuJump": "列表",
                    "tableName": "tushufenlei"
                }], "menu": "图书分类管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-clothes",
                    "buttons": ["查看", "修改", "删除", "查看评论"],
                    "menu": "二手图书",
                    "menuJump": "列表",
                    "tableName": "ershoutushu"
                }], "menu": "二手图书管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-phone",
                    "buttons": ["查看", "修改", "删除"],
                    "menu": "求购图书",
                    "menuJump": "列表",
                    "tableName": "qiugoutushu"
                }], "menu": "求购图书管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-vip",
                    "buttons": ["查看", "修改", "删除"],
                    "menu": "求购回复",
                    "menuJump": "列表",
                    "tableName": "qiugouhuifu"
                }], "menu": "求购回复管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-message",
                    "buttons": ["查看", "修改", "回复", "删除"],
                    "menu": "留言反馈",
                    "tableName": "messages"
                }], "menu": "留言反馈"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-service",
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "联系客服",
                    "tableName": "chat"
                }, {
                    "appFrontIcon": "cuIcon-keyboard",
                    "buttons": ["查看", "修改"],
                    "menu": "轮播图管理",
                    "tableName": "config"
                }, {
                    "appFrontIcon": "cuIcon-news",
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "系统公告",
                    "tableName": "news"
                }], "menu": "系统管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-clothes",
                    "buttons": ["查看"],
                    "menu": "已支付订单",
                    "tableName": "orders/已支付"
                }, {
                    "appFrontIcon": "cuIcon-link",
                    "buttons": ["查看"],
                    "menu": "已退款订单",
                    "tableName": "orders/已退款"
                }, {
                    "appFrontIcon": "cuIcon-explore",
                    "buttons": ["查看"],
                    "menu": "已完成订单",
                    "tableName": "orders/已完成"
                }, {
                    "appFrontIcon": "cuIcon-flashlightopen",
                    "buttons": ["查看"],
                    "menu": "已发货订单",
                    "tableName": "orders/已发货"
                }, {
                    "appFrontIcon": "cuIcon-qrcode",
                    "buttons": ["查看"],
                    "menu": "未支付订单",
                    "tableName": "orders/未支付"
                }, {
                    "appFrontIcon": "cuIcon-news",
                    "buttons": ["查看"],
                    "menu": "已取消订单",
                    "tableName": "orders/已取消"
                }], "menu": "订单管理"
            }],
            "frontMenu": [{
                "child": [{
                    "appFrontIcon": "cuIcon-cardboard",
                    "buttons": ["查看"],
                    "menu": "二手图书列表",
                    "menuJump": "列表",
                    "tableName": "ershoutushu"
                }], "menu": "二手图书模块"
            }],
            "hasBackLogin": "是",
            "hasBackRegister": "否",
            "hasFrontLogin": "否",
            "hasFrontRegister": "否",
            "roleName": "管理员",
            "tableName": "users"
        }, {
            "backMenu": [{
                "child": [{
                    "appFrontIcon": "cuIcon-phone",
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "求购图书",
                    "menuJump": "列表",
                    "tableName": "qiugoutushu"
                }], "menu": "求购图书管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-vip",
                    "buttons": ["查看"],
                    "menu": "求购回复",
                    "menuJump": "列表",
                    "tableName": "qiugouhuifu"
                }], "menu": "求购回复管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-message",
                    "buttons": ["查看", "删除"],
                    "menu": "留言反馈",
                    "tableName": "messages"
                }], "menu": "留言反馈"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-flashlightopen",
                    "buttons": ["查看", "确认收货"],
                    "menu": "已发货订单",
                    "tableName": "orders/已发货"
                }, {
                    "appFrontIcon": "cuIcon-qrcode",
                    "buttons": ["查看"],
                    "menu": "未支付订单",
                    "tableName": "orders/未支付"
                }, {
                    "appFrontIcon": "cuIcon-news",
                    "buttons": ["查看"],
                    "menu": "已取消订单",
                    "tableName": "orders/已取消"
                }, {
                    "appFrontIcon": "cuIcon-clothes",
                    "buttons": ["查看"],
                    "menu": "已支付订单",
                    "tableName": "orders/已支付"
                }, {
                    "appFrontIcon": "cuIcon-link",
                    "buttons": ["查看"],
                    "menu": "已退款订单",
                    "tableName": "orders/已退款"
                }, {
                    "appFrontIcon": "cuIcon-explore",
                    "buttons": ["查看"],
                    "menu": "已完成订单",
                    "tableName": "orders/已完成"
                }], "menu": "订单管理"
            }],
            "frontMenu": [{
                "child": [{
                    "appFrontIcon": "cuIcon-cardboard",
                    "buttons": ["查看"],
                    "menu": "二手图书列表",
                    "menuJump": "列表",
                    "tableName": "ershoutushu"
                }], "menu": "二手图书模块"
            }],
            "hasBackLogin": "否",
            "hasBackRegister": "否",
            "hasFrontLogin": "是",
            "hasFrontRegister": "是",
            "roleName": "用户",
            "tableName": "yonghu"
        }, {
            "backMenu": [{
                "child": [{
                    "appFrontIcon": "cuIcon-clothes",
                    "buttons": ["新增", "查看", "修改", "删除", "查看评论"],
                    "menu": "二手图书",
                    "menuJump": "列表",
                    "tableName": "ershoutushu"
                }], "menu": "二手图书管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-phone",
                    "buttons": ["查看", "回复"],
                    "menu": "求购图书",
                    "menuJump": "列表",
                    "tableName": "qiugoutushu"
                }], "menu": "求购图书管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-vip",
                    "buttons": ["查看", "删除", "修改"],
                    "menu": "求购回复",
                    "menuJump": "列表",
                    "tableName": "qiugouhuifu"
                }], "menu": "求购回复管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-flashlightopen",
                    "buttons": ["查看"],
                    "menu": "已发货订单",
                    "tableName": "orders/已发货"
                }, {
                    "appFrontIcon": "cuIcon-qrcode",
                    "buttons": ["查看"],
                    "menu": "未支付订单",
                    "tableName": "orders/未支付"
                }, {
                    "appFrontIcon": "cuIcon-news",
                    "buttons": ["查看"],
                    "menu": "已取消订单",
                    "tableName": "orders/已取消"
                }, {
                    "appFrontIcon": "cuIcon-clothes",
                    "buttons": ["查看", "发货"],
                    "menu": "已支付订单",
                    "tableName": "orders/已支付"
                }, {
                    "appFrontIcon": "cuIcon-link",
                    "buttons": ["查看"],
                    "menu": "已退款订单",
                    "tableName": "orders/已退款"
                }, {
                    "appFrontIcon": "cuIcon-explore",
                    "buttons": ["查看"],
                    "menu": "已完成订单",
                    "tableName": "orders/已完成"
                }], "menu": "订单管理"
            }],
            "frontMenu": [{
                "child": [{
                    "appFrontIcon": "cuIcon-cardboard",
                    "buttons": ["查看"],
                    "menu": "二手图书列表",
                    "menuJump": "列表",
                    "tableName": "ershoutushu"
                }], "menu": "二手图书模块"
            }],
            "hasBackLogin": "是",
            "hasBackRegister": "是",
            "hasFrontLogin": "否",
            "hasFrontRegister": "否",
            "roleName": "卖家用户",
            "tableName": "maijiayonghu"
        }]
    }
}
export default menu;
