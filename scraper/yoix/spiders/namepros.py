# -*- coding: utf-8 -*-
import scrapy

class NameprosSpider(scrapy.Spider):
    name = 'namepros'
    allowed_domains = ['namepros.com']
    start_urls = ['https://namepros.com/']

    def parse(self, response):
        yield { 'title' : response.css('title::text').getall() }
