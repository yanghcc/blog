# 遇到的问题与解决方案

<!-- ## 列表 -->

- **远程连接mysql时，提示“is not allowed to connect to this MySQL server”？**

   ```bash
   mysql -u root –p
   mysql>use mysql;
   mysql>update user set host = '%' where user = 'root';
   mysql>select host, user from user;
   ```

- **授权错误，提示：Authentication plugin 'caching_sha2_password' cannot be loaded?**

   ```bash
   #You can change the encryption of the user's password by altering the user with below Alter command:
   ALTER USER 'username'@'ip_address' IDENTIFIED WITH mysql_native_password BY 'password';
   #OR
   #We can avoid this error by make it work with old password plugin:
   #First change the authentication plugin in my.cnf file for Linux / my.ini file in Windows:
   [mysqld]
   default_authentication_plugin=mysql_native_password
   #Restart the mysql server to take the changes in affect and try connecting via MySQL with any mysql client.
   ```

- **mysql 重置密码、忘记密码**

   1. 修改my.ini

      ```bash
      #编辑mysql配置文件
      vim /etc/my.cnf
      #添加
      skip-grant-tables
      ```

   2. 重启mysql服务

      ```bash
      service mysql restart
      #新的mysql执行这个命令
      systemctl restart mysqld.service
      ```

   3. 登录mysql

      ```bash
      #连接mysql，直接回车即可，不需要输入密码
      mysql -u root -p
      #更新root用户密码（mysql V5.7.9之前可用，新版本废弃了password字段和password()函数；）
      update mysql.user set authentication_string=password('password') where user='root' and Host = 'localhost';
      # 将密码置空，重新登录后使用alter修改密码
      update user set authentication_string='' where user='root';
      ALTER user 'root'@'localhost' IDENTIFIED BY 'pwd';
      #刷新权限
      flush privileges;
      #推出mysql
      exit   或者 quit
      ```

   4. 删除配置文件中的skip-grant-tables

      ```bash
      vim /etc/my.cnf
      #注释掉skip-grant-tables
      ```

   5. 重启mysql，让配置生效

      ```bash
       #重启mysql
       service mysql restart
       mysql -uroot -p******
      ```

- Mysql 8.0+ 开启远程访问

  ```bash
  # 选择数据库
  use mysql;
  # 使用以下命令开启root用户远程访问权限：
  CREATE USER 'root'@'%' IDENTIFIED BY '你的密码'; # 创建root用户，并允许远程连接
  GRANT ALL ON *.* TO 'root'@'%';
  ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '你的密码';
  # 刷新权限
  FLUSH PRIVILEGES;
  ```