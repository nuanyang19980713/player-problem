<?php
class Api {
    // 构造函数,初始化数据库
    function __construct($option)
    {
        $username = 'root';
        $host = 'localhost';
        $pass = '123456';
        $db = 'onlineTest';
        $conn = new mysqli($host,$username,$pass,$db);
        if (!$conn) {
            echo '连接失败';
        }
    }
    var $api; // api接口
    function setApi($par) {
        $this->api = $par;
    }
    function getApi() {
        return $this->api;
    }

}