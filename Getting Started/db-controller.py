from pymongo import MongoClient

client = MongoClient('localhost', 27017)
db = client['test_database']
col1 = db['test_collection']
doc1 = {"animal":"Dragon"}
col1.insert_one(doc1)
print(col1.find_one())