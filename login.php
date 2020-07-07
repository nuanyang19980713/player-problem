<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>登入页面</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="./images/logo.png" rel="icon">
    <style>
        *{
            padding: 0;
            margin: 0;
        }
        html{
            width: 100%;
            height: 100%;
        }
        :root{
            font-size: calc(100vw/375);
        }
        body{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .container{
            display: flex;
            width: 70rem;
            height: 33rem;
            background: #ffffff;
            border-radius: 0.5rem;
            box-shadow: 0 0 10px #ffffff;
        }
        .container div{
            flex: 1;
        }
        .left{
            background-color: #ecf0f1;
            background-image: url('./images/dog.jpeg');
            background-position: center;
            background-repeat: no-repeat;
            background-origin: border-box;
            background-size: 100% 100%;
        }
        .right {
            display: flex;
            flex-direction: column;
        }
        .right main {
            flex: 3;
            display: flex;
            padding: 1rem;
            position: relative;
        }
        .right footer{
            padding: 2rem;
            flex: 1;
            text-align: center;
        }
        .right footer> .footer{
            border-top: 1px solid silver;
        }
        .right main form{
            flex: 1;
        }
        .input-group{
            height: 5rem;

        }

        .btn{
            background-color: #3498db;
            outline: none;
            border: 1px solid snow;
            border-radius: 25px;
            width: 18rem;
            height: 40px;
            color: snow;
            font-weight: bold;
        }
        .input-group input {
            width: 100%;
            height: 3.2rem;
            border-radius: 2rem;
            border: 1px solid silver;
            padding: 0 1rem;
            outline: none;
            box-sizing: border-box;
        }
        @media only screen and (min-width: 768px) {

            body{
                width: 100%;
                height: 100%;
                background-color: #3498db;
            }
            .btn{
                margin-top: 3rem;
                width: 10rem;
            }

        }
        @media screen and (max-width: 768px) {
            body{
                padding: 0 5rem;
                width: 100%;
                height: 100%;
                background-image: url('./images/login_phone.jpeg');
            }
            .container{
                width: 30rem;
                height: 30rem;
            }
            h1{
                font-size: 10rem;
            }
            .left{
                display: none;
            }
            .btn{
                margin-top: 2rem;
            }
        }

    </style>
</head>
<body>
    <div class="container">
        <div class="left"></div>
        <div class="right">
            <h1 style="padding: 10px;box-sizing: border-box;text-align: center; font-size: 5rem;letter-spacing: 5px;">欢迎回来</h1>
                <main>
                <form action="./api/login.php" method="post" enctype="application/x-www-form-urlencoded">
                    <div class="input-group">
                        <input type="text" placeholder="请输入用户名">
                    </div>
                    <div class="input-group">
                        <input type="text" placeholder="请输入密码">
                    </div>
                    <p style="padding-left: 10px;">
                        <input type="checkbox"> <label>记住密码</label>
                    </p>

                    <div class="input-group" style="text-align: center">
                        <button class="btn">登入</button>
                    </div>
                </form>
            </main>
            <footer>
                <div class="footer" style="padding-top: 10px;">
                    <a href="#" style="text-decoration: none;">注册账号</a>
                </div>

            </footer>
        </div>
    </div>
</body>
</html>