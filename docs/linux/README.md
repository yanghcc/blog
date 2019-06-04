# linux服务器常用操作

## 常用命令

- 查看进程：
lsof -i:port
- 杀进程：
kill -9 processId
- 查看服务器端口占用情况（使用grep过滤）：
  使用命令：ps -aux | grep tomcat
- netstat -lnp查看端口占用情况
