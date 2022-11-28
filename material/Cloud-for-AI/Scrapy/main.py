from tutorial.tutorial.spiders.quotes_spider import QuotesSpider
from scrapy.crawler import CrawlerProcess
from scrapy.utils.project import get_project_settings

if __name__ == '__main__':
    config = get_project_settings()
    cp = CrawlerProcess(settings=config)
    cp.crawl(QuotesSpider)
    cp.start()
