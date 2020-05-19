MONGO_URI = 'mongodb://localhost:27017/'
MONGO_DATABASE = 'app' 

ITEM_PIPELINES = {
    'app.pipelines.MongoPipeline': 300,
}