# -*- coding: utf-8 -*-
import scrapy

class XenforoSpider(scrapy.Spider):
    name = 'xenforo'
    allowed_domains = ['*']
    with open('yoix/data/forums.txt') as fp:
        start_urls = [line.rstrip('\n') for line in fp]

    def parse(self, response):
        yield { 'title' : response.css('title::text').getall() }
