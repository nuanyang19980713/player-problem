// 获取脑筋急转弯的数据
const axios = require('axios')
const cheerio = require('cheerio')
const iconv = require('iconv-lite')
const agent = require('superagent')
const charset = require('superagent-charset')
const mysql = require('mysql')

// 数据库的连接

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'onlineTest'
})
if (connection) {
    console.log('连接数据库成功')
}

connection.connect()
charset(agent);

// 获取脑筋急转弯的数据
// for (let i=1;i<=71;i++) {
//     setTimeout(()=>{
//         dawnload(`https://www.xuexila.com/jzw/${i}.htm`)
//     },3000*(i-1))
//
// }
// function dawnload(url) {
//     agent.get(url).charset('gbk').end((err,res)=>{
//         let html = res.text
//         let $ = cheerio.load(html)
//         let len = $('.biaoge tr').length
//         $('.biaoge tr').each((index,ele)=>{
//             if (!Boolean($(ele).prop('bgcolor')) && index !==len - 2 && index !== 0) {
//                 let id = $(ele).find('td').eq(0).text().trim()
//                 let problem = $(ele).find('td').eq(1).text().trim()
//                 let answer = $(ele).find('td').eq(2).find('input').prop('onclick').trim()
//                 let reg = /\((.*?)\)/igs
//                 let ret = reg.exec(answer)[1] // 正则匹配的结果
//                 connection.query(`insert into brainGrew(id,problem,answer) values(null,?,?)`,[problem,ret],(err,data)=>{
//                     if (err) throw new Error(err)
//                     console.log('插入数据成功')
//                 })
//             }
//         })
//
//     })
// }

// 获取真心话大冒险的数据
// const url = 'http://www.juzih.com/juzidaquan/7421.html'
//
// agent.get(url).charset('gbk').end((err,res)=>{
//     if (err) throw new Error(err)
//     let $ = cheerio.load(res.text)
//     $('.content p').each((index,ele)=>{
//         let title = $(ele).text()
//         let reg = /^\d+、(.*)$/
//         let result = reg.exec(title)[1]
//         connection.query('insert into frankTalk(id,type,content) values(null,0,?)',[result],(err,data)=>{
//             if (err) throw new Error(err)
//             console.log('真心话添加成功')
//         })
//     })
// })


// 获取大冒险的数据
const url = 'http://www.qunzou.com/shenghuo/16957.html'

axios.get(url).then(res=>{
    let $ = cheerio.load(res.data)
    $("#content p").each((i,e)=>{
        if (i !== 0) {
            let title = $(e).text().trim()
            let reg = /^\d+、(.*)$/
             let result = reg.exec(title)[1]
            connection.query('insert into frankTalk(id,type,content) values(null,1,?)',[result],(err,data)=>{
                if (err) throw new Error(err)
                console.log('大冒险添加成功')
        })
        }
    })
})