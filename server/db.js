db.getCollection("admins").insert( {
    __v: NumberInt("0"),
    _id: ObjectId("6038a40ab48f6218a0426a00"),
    password: "a50d612a97656b495e76a9595b8797e26e93efa48928577ae10fe5d99d38b88b",
    salt: "a3hd8okhxu7o0159rhvjmdm1jjipt744ii3dzfpinakmdvfuwb",
    username: "houxiaozhao"
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efc6cc81911f06163c7"),
    alias: "/",
    createdAt: ISODate("2021-03-01T06:51:40.978Z"),
    method: "GET",
    updatedAt: ISODate("2021-03-01T06:51:40.978Z"),
    url: "/",
    verification: false
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efc6cc81911f06163c8"),
    alias: "创建用户",
    createdAt: ISODate("2021-03-01T06:51:40.985Z"),
    method: "POST",
    updatedAt: ISODate("2021-03-01T07:02:30.381Z"),
    url: "/user",
    verification: true
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efc6cc81911f06163c9"),
    alias: "获取用户列表",
    createdAt: ISODate("2021-03-01T06:51:40.987Z"),
    method: "GET",
    updatedAt: ISODate("2021-03-01T07:02:28.371Z"),
    url: "/user",
    verification: true
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efc6cc81911f06163ca"),
    alias: "更新用户",
    createdAt: ISODate("2021-03-01T06:51:40.991Z"),
    method: "PUT",
    updatedAt: ISODate("2021-03-01T06:51:40.991Z"),
    url: "/user/{id}",
    verification: false
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efc6cc81911f06163cc"),
    alias: "用户短信验证码登陆",
    createdAt: ISODate("2021-03-01T06:51:40.993Z"),
    method: "POST",
    updatedAt: ISODate("2021-03-01T06:51:40.993Z"),
    url: "/auth/verificationCodeLogin",
    verification: false
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efc6cc81911f06163cb"),
    alias: "用户登陆",
    createdAt: ISODate("2021-03-01T06:51:40.992Z"),
    method: "POST",
    updatedAt: ISODate("2021-03-01T06:51:40.992Z"),
    url: "/auth/login",
    verification: false
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efc6cc81911f06163cf"),
    alias: "用户获取验证码,验证码1小时有效",
    createdAt: ISODate("2021-03-01T06:51:40.997Z"),
    method: "GET",
    updatedAt: ISODate("2021-03-01T06:51:40.997Z"),
    url: "/auth/svgCaptacha",
    verification: false
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efc6cc81911f06163d0"),
    alias: "找回密码",
    createdAt: ISODate("2021-03-01T06:51:40.997Z"),
    method: "GET",
    updatedAt: ISODate("2021-03-01T06:51:40.997Z"),
    url: "/auth/retrievePassword",
    verification: false
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efc6cc81911f06163cd"),
    alias: "获取验证码",
    createdAt: ISODate("2021-03-01T06:51:40.995Z"),
    method: "GET",
    updatedAt: ISODate("2021-03-01T06:51:40.995Z"),
    url: "/auth/verificationCode",
    verification: false
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efc6cc81911f06163ce"),
    alias: "用户获取信息",
    createdAt: ISODate("2021-03-01T06:51:40.996Z"),
    method: "GET",
    updatedAt: ISODate("2021-03-01T06:51:40.996Z"),
    url: "/auth/profile",
    verification: false
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efd6cc81911f06163d1"),
    alias: "获取公司列表",
    createdAt: ISODate("2021-03-01T06:51:41.005Z"),
    method: "GET",
    updatedAt: ISODate("2021-03-01T06:51:41.005Z"),
    url: "/company",
    verification: false
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efd6cc81911f06163d2"),
    alias: "获取角色列表",
    createdAt: ISODate("2021-03-01T06:51:41.006Z"),
    method: "GET",
    updatedAt: ISODate("2021-03-01T07:02:47.801Z"),
    url: "/role",
    verification: true
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efd6cc81911f06163d3"),
    alias: "管理员登陆",
    createdAt: ISODate("2021-03-01T06:51:41.007Z"),
    method: "POST",
    updatedAt: ISODate("2021-03-01T06:51:41.007Z"),
    url: "/admin-auth/login",
    verification: false
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efd6cc81911f06163d4"),
    alias: "获取菜单",
    createdAt: ISODate("2021-03-01T06:51:41.008Z"),
    method: "GET",
    updatedAt: ISODate("2021-03-01T06:51:41.008Z"),
    url: "/menu/{id}",
    verification: false
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efd6cc81911f06163d5"),
    alias: "获取按钮",
    createdAt: ISODate("2021-03-01T06:51:41.008Z"),
    method: "GET",
    updatedAt: ISODate("2021-03-01T06:51:41.008Z"),
    url: "/button/{id}",
    verification: false
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efd6cc81911f06163d6"),
    alias: "获取接口",
    createdAt: ISODate("2021-03-01T06:51:41.009Z"),
    method: "GET",
    updatedAt: ISODate("2021-03-01T06:51:41.009Z"),
    url: "/api/{id}",
    verification: false
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efd6cc81911f06163d7"),
    alias: "获取权限",
    createdAt: ISODate("2021-03-01T06:51:41.01Z"),
    method: "GET",
    updatedAt: ISODate("2021-03-01T06:51:41.01Z"),
    url: "/permission/{id}",
    verification: false
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efd6cc81911f06163d8"),
    alias: "/file/upload-exif",
    createdAt: ISODate("2021-03-01T06:51:41.011Z"),
    method: "POST",
    updatedAt: ISODate("2021-03-01T06:51:41.011Z"),
    url: "/file/upload-exif",
    verification: false
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efd6cc81911f06163d9"),
    alias: "更新device",
    createdAt: ISODate("2021-03-01T06:51:41.012Z"),
    method: "PUT",
    updatedAt: ISODate("2021-03-01T06:53:29.348Z"),
    url: "/device/{id}",
    verification: true
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efd6cc81911f06163da"),
    alias: "创建公司",
    createdAt: ISODate("2021-03-01T06:51:41.012Z"),
    method: "POST",
    updatedAt: ISODate("2021-03-01T06:51:41.012Z"),
    url: "/company",
    verification: false
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efd6cc81911f06163db"),
    alias: "删除角色",
    createdAt: ISODate("2021-03-01T06:51:41.013Z"),
    method: "DELETE",
    updatedAt: ISODate("2021-03-01T07:02:47.348Z"),
    url: "/role/{id}",
    verification: true
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efd6cc81911f06163dc"),
    alias: "创建菜单",
    createdAt: ISODate("2021-03-01T06:51:41.014Z"),
    method: "POST",
    updatedAt: ISODate("2021-03-01T06:51:41.014Z"),
    url: "/menu",
    verification: false
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efd6cc81911f06163dd"),
    alias: "创建按钮",
    createdAt: ISODate("2021-03-01T06:51:41.015Z"),
    method: "POST",
    updatedAt: ISODate("2021-03-01T06:51:41.015Z"),
    url: "/button",
    verification: false
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efd6cc81911f06163de"),
    alias: "创建接口",
    createdAt: ISODate("2021-03-01T06:51:41.016Z"),
    method: "POST",
    updatedAt: ISODate("2021-03-01T06:51:41.016Z"),
    url: "/api",
    verification: false
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efd6cc81911f06163df"),
    alias: "创建权限",
    createdAt: ISODate("2021-03-01T06:51:41.016Z"),
    method: "POST",
    updatedAt: ISODate("2021-03-01T06:51:41.016Z"),
    url: "/permission",
    verification: false
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efd6cc81911f06163e0"),
    alias: "/file/upload",
    createdAt: ISODate("2021-03-01T06:51:41.017Z"),
    method: "POST",
    updatedAt: ISODate("2021-03-01T06:51:41.017Z"),
    url: "/file/upload",
    verification: false
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efd6cc81911f06163e1"),
    alias: "获取device",
    createdAt: ISODate("2021-03-01T06:51:41.018Z"),
    method: "GET",
    updatedAt: ISODate("2021-03-01T06:53:28.877Z"),
    url: "/device/{id}",
    verification: true
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efd6cc81911f06163e2"),
    alias: "获取公司",
    createdAt: ISODate("2021-03-01T06:51:41.019Z"),
    method: "GET",
    updatedAt: ISODate("2021-03-01T06:51:41.019Z"),
    url: "/company/{id}",
    verification: false
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efd6cc81911f06163e3"),
    alias: "获取角色",
    createdAt: ISODate("2021-03-01T06:51:41.019Z"),
    method: "GET",
    updatedAt: ISODate("2021-03-01T07:02:46.895Z"),
    url: "/role/{id}",
    verification: true
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efd6cc81911f06163e4"),
    alias: "获取菜单树",
    createdAt: ISODate("2021-03-01T06:51:41.021Z"),
    method: "GET",
    updatedAt: ISODate("2021-03-01T06:51:41.021Z"),
    url: "/menu/menutree",
    verification: false
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efd6cc81911f06163e5"),
    alias: "删除菜单",
    createdAt: ISODate("2021-03-01T06:51:41.022Z"),
    method: "DELETE",
    updatedAt: ISODate("2021-03-01T06:51:41.022Z"),
    url: "/menu/{id}",
    verification: false
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efd6cc81911f06163e6"),
    alias: "删除按钮",
    createdAt: ISODate("2021-03-01T06:51:41.023Z"),
    method: "DELETE",
    updatedAt: ISODate("2021-03-01T06:51:41.023Z"),
    url: "/button/{id}",
    verification: false
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efd6cc81911f06163e7"),
    alias: "删除接口",
    createdAt: ISODate("2021-03-01T06:51:41.023Z"),
    method: "DELETE",
    updatedAt: ISODate("2021-03-01T06:51:41.023Z"),
    url: "/api/{id}",
    verification: false
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efd6cc81911f06163e8"),
    alias: "删除权限",
    createdAt: ISODate("2021-03-01T06:51:41.024Z"),
    method: "DELETE",
    updatedAt: ISODate("2021-03-01T06:51:41.024Z"),
    url: "/permission/{id}",
    verification: false
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efd6cc81911f06163e9"),
    alias: "创建device",
    createdAt: ISODate("2021-03-01T06:51:41.025Z"),
    method: "POST",
    updatedAt: ISODate("2021-03-01T06:53:27.786Z"),
    url: "/device",
    verification: true
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efd6cc81911f06163ea"),
    alias: "更新公司",
    createdAt: ISODate("2021-03-01T06:51:41.026Z"),
    method: "PUT",
    updatedAt: ISODate("2021-03-01T06:51:41.026Z"),
    url: "/company/{id}",
    verification: false
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efd6cc81911f06163eb"),
    alias: "更新角色",
    createdAt: ISODate("2021-03-01T06:51:41.027Z"),
    method: "PUT",
    updatedAt: ISODate("2021-03-01T07:02:46.411Z"),
    url: "/role/{id}",
    verification: true
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efd6cc81911f06163ec"),
    alias: "获取菜单列表",
    createdAt: ISODate("2021-03-01T06:51:41.027Z"),
    method: "GET",
    updatedAt: ISODate("2021-03-01T06:51:41.027Z"),
    url: "/menu",
    verification: false
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efd6cc81911f06163ed"),
    alias: "获取按钮列表",
    createdAt: ISODate("2021-03-01T06:51:41.028Z"),
    method: "GET",
    updatedAt: ISODate("2021-03-01T06:51:41.028Z"),
    url: "/button",
    verification: false
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efd6cc81911f06163ee"),
    alias: "获取接口列表",
    createdAt: ISODate("2021-03-01T06:51:41.029Z"),
    method: "GET",
    updatedAt: ISODate("2021-03-01T06:51:41.029Z"),
    url: "/api",
    verification: false
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efd6cc81911f06163ef"),
    alias: "获取权限列表",
    createdAt: ISODate("2021-03-01T06:51:41.03Z"),
    method: "GET",
    updatedAt: ISODate("2021-03-01T06:51:41.03Z"),
    url: "/permission",
    verification: false
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efd6cc81911f06163f0"),
    alias: "获取权限列表",
    createdAt: ISODate("2021-03-01T06:51:41.03Z"),
    method: "GET",
    updatedAt: ISODate("2021-03-01T06:51:41.03Z"),
    url: "/user_permission",
    verification: false
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efd6cc81911f06163f1"),
    alias: "获取device列表",
    createdAt: ISODate("2021-03-01T06:51:41.031Z"),
    method: "GET",
    updatedAt: ISODate("2021-03-01T06:53:27.326Z"),
    url: "/device",
    verification: true
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efd6cc81911f06163f2"),
    alias: "删除公司",
    createdAt: ISODate("2021-03-01T06:51:41.032Z"),
    method: "DELETE",
    updatedAt: ISODate("2021-03-01T06:51:41.032Z"),
    url: "/company/{id}",
    verification: false
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efd6cc81911f06163f3"),
    alias: "创建角色",
    createdAt: ISODate("2021-03-01T06:51:41.033Z"),
    method: "POST",
    updatedAt: ISODate("2021-03-01T07:02:45.658Z"),
    url: "/role",
    verification: true
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efd6cc81911f06163f4"),
    alias: "管理员获取信息",
    createdAt: ISODate("2021-03-01T06:51:41.033Z"),
    method: "GET",
    updatedAt: ISODate("2021-03-01T06:51:41.033Z"),
    url: "/admin-auth/profile",
    verification: false
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efd6cc81911f06163f5"),
    alias: "更新菜单",
    createdAt: ISODate("2021-03-01T06:51:41.034Z"),
    method: "PUT",
    updatedAt: ISODate("2021-03-01T06:51:41.034Z"),
    url: "/menu/{id}",
    verification: false
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efd6cc81911f06163f6"),
    alias: "更新按钮",
    createdAt: ISODate("2021-03-01T06:51:41.035Z"),
    method: "PUT",
    updatedAt: ISODate("2021-03-01T06:51:41.035Z"),
    url: "/button/{id}",
    verification: false
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efd6cc81911f06163f7"),
    alias: "更新接口",
    createdAt: ISODate("2021-03-01T06:51:41.036Z"),
    method: "PUT",
    updatedAt: ISODate("2021-03-01T06:51:41.036Z"),
    url: "/api/{id}",
    verification: false
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efd6cc81911f06163f8"),
    alias: "更新权限",
    createdAt: ISODate("2021-03-01T06:51:41.038Z"),
    method: "PUT",
    updatedAt: ISODate("2021-03-01T06:51:41.038Z"),
    url: "/permission/{id}",
    verification: false
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efd6cc81911f06163f9"),
    alias: "/file/signedUrlSync",
    createdAt: ISODate("2021-03-01T06:51:41.038Z"),
    method: "POST",
    updatedAt: ISODate("2021-03-01T06:51:41.038Z"),
    url: "/file/signedUrlSync",
    verification: false
} );
db.getCollection("apis").insert( {
    _id: ObjectId("603c8efd6cc81911f06163fa"),
    alias: "删除device",
    createdAt: ISODate("2021-03-01T06:51:41.039Z"),
    method: "DELETE",
    updatedAt: ISODate("2021-03-01T06:52:26.514Z"),
    url: "/device/{id}",
    verification: true
} );
db.getCollection("companies").insert( {
    __v: NumberInt("0"),
    _id: ObjectId("603c92b3aca3cb1ec82cc0d8"),
    createdAt: ISODate("2021-03-01T07:07:31.447Z"),
    name: "测试公司",
    updatedAt: ISODate("2021-03-01T07:07:31.447Z")
} );
db.getCollection("menus").insert( {
    __v: NumberInt("0"),
    _id: ObjectId("603c8f9aaf9b704534781035"),
    createdAt: ISODate("2021-03-01T06:54:18.896Z"),
    icon: "",
    order: NumberInt("0"),
    parent: null,
    path: "/device",
    remarks: "设备管理",
    title: "设备管理",
    type: "菜单",
    updatedAt: ISODate("2021-03-01T06:54:18.896Z")
} );
db.getCollection("menus").insert( {
    __v: NumberInt("0"),
    _id: ObjectId("603c91c2aca3cb1ec82cc0d3"),
    createdAt: ISODate("2021-03-01T07:03:30.338Z"),
    icon: "",
    order: NumberInt("0"),
    parent: null,
    path: "",
    remarks: "",
    title: "系统管理",
    type: "菜单组",
    updatedAt: ISODate("2021-03-01T07:03:30.338Z")
} );
db.getCollection("menus").insert( {
    __v: NumberInt("0"),
    _id: ObjectId("603c91d1aca3cb1ec82cc0d4"),
    createdAt: ISODate("2021-03-01T07:03:45.045Z"),
    icon: "",
    order: NumberInt("0"),
    parent: ObjectId("603c91c2aca3cb1ec82cc0d3"),
    path: "/auth/user",
    remarks: "",
    title: "用户管理",
    type: "菜单",
    updatedAt: ISODate("2021-03-01T07:03:45.045Z")
} );
db.getCollection("menus").insert( {
    __v: NumberInt("0"),
    _id: ObjectId("603c91dcaca3cb1ec82cc0d5"),
    createdAt: ISODate("2021-03-01T07:03:56.306Z"),
    icon: "",
    order: NumberInt("0"),
    parent: ObjectId("603c91c2aca3cb1ec82cc0d3"),
    path: "/auth/role",
    remarks: "",
    title: "角色管理",
    type: "菜单",
    updatedAt: ISODate("2021-03-01T07:03:56.306Z")
} );
db.getCollection("permissions").insert( {
    __v: NumberInt("0"),
    _id: ObjectId("603c9263aca3cb1ec82cc0d6"),
    alias: "用户管理权限",
    apis: [
        ObjectId("603c8efc6cc81911f06163c9"),
        ObjectId("603c8efc6cc81911f06163c8")
    ],
    buttons: [ ],
    createdAt: ISODate("2021-03-01T07:06:11.892Z"),
    menus: [
        ObjectId("603c91c2aca3cb1ec82cc0d3"),
        ObjectId("603c91d1aca3cb1ec82cc0d4")
    ],
    updatedAt: ISODate("2021-03-01T07:06:11.892Z")
} );
db.getCollection("permissions").insert( {
    __v: NumberInt("0"),
    _id: ObjectId("603c928aaca3cb1ec82cc0d7"),
    alias: "角色管理权限",
    apis: [
        ObjectId("603c8efd6cc81911f06163f3"),
        ObjectId("603c8efd6cc81911f06163eb"),
        ObjectId("603c8efd6cc81911f06163e3"),
        ObjectId("603c8efd6cc81911f06163db"),
        ObjectId("603c8efd6cc81911f06163d2")
    ],
    buttons: [ ],
    createdAt: ISODate("2021-03-01T07:06:50.046Z"),
    menus: [
        ObjectId("603c91c2aca3cb1ec82cc0d3"),
        ObjectId("603c91dcaca3cb1ec82cc0d5")
    ],
    updatedAt: ISODate("2021-03-01T07:06:50.046Z")
} );
db.getCollection("roles").insert( {
    __v: NumberInt("0"),
    _id: ObjectId("603c92b3aca3cb1ec82cc0da"),
    alias: "管理员",
    company: ObjectId("603c92b3aca3cb1ec82cc0d8"),
    createdAt: ISODate("2021-03-01T07:07:31.465Z"),
    permissions: [
        ObjectId("603c928aaca3cb1ec82cc0d7"),
        ObjectId("603c9263aca3cb1ec82cc0d6")
    ],
    updatedAt: ISODate("2021-03-01T07:07:31.465Z")
} );
db.getCollection("users").insert( {
    __v: NumberInt("0"),
    _id: ObjectId("603c92b3aca3cb1ec82cc0d9"),
    company: ObjectId("603c92b3aca3cb1ec82cc0d8"),
    createdAt: ISODate("2021-03-01T07:07:31.453Z"),
    password: "e2b48ce2270777ea07af50509eac09d9e954c6fdeb0976e51993195f7619e7c9",
    phone: "18300000000",
    roles: [
        ObjectId("603c92b3aca3cb1ec82cc0da")
    ],
    salt: "t7x89wgjlicxevbhgvm8iy1tq3f7mqi4npscylblmym9cs131m",
    status: true,
    updatedAt: ISODate("2021-03-01T07:07:31.479Z"),
    username: "18300000000"
} );
