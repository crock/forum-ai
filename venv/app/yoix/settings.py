MONGO_URI = 'mongodb://localhost:27017/'
MONGO_DATABASE = 'yoix' 

ITEM_PIPELINES = {
    'yoix.pipelines.MongoPipeline': 300,
}