const PORT = 8000;
const express = require('express')
const axios = require('axios').default;
const cheerio = require('cheerio');
const { response } = require('express');
const app = express()

const url = 'https://www.diariomunicipal.sc.gov.br/?r=site/index&q=abertura+categoria%3ALicita%C3%A7%C3%B5es&AtoASolrDocument_page=1'

axios.get(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const articles = []
        $('h4',html).each(function(){
            const title = $(this).text()
            articles.push({
                title
            })
        })
        $('.quiet',html).each(function(){
            const date = $(this).text().split('-')[0]
            articles.push({
                date
            })
        }) 
        console.log(articles)   
    })
    .catch(err => console.log(err))

app.listen(PORT , () => console.log(`server running on ${PORT}`))