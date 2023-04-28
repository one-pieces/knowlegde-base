# 使用 net 模块创建 TPC 服务
Nodejs 内置模块 net 提供了异步的网络 API，用于创建基于流的 TCP 或 IPC 服务器（net.createServer()）和客户端（net.createConnection()）。

需要注意的是 net 模块在 Windows 上使用命名管道支持 IPC，在其他操作系统上则使用 Unix 域套接字。