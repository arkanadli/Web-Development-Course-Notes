// :: TO START MONGO DB : =>
1. use git bash as a terminal
2. type mongosh to enter mongo db editor
3. use these command:
    1. show databases (to show all databases)
    2. show collections (to show all collection in current db)
    3. use *animalShelter (to use or making new one databases called animalShelter)
    4. (CREATE) db."nameOfCollections".insert() ,you can insert data to those collection 
    5. db.dogs.find() ,to check whether the data have been inserted or not
    6. unique id will be auto generated if we not setting up the id
    7. (FIND) db.dogs.find({type:"Golden Retriver"}), to find data that maches the filter
    8. (UPDATE) db.dogs.updateOne/many({type:"Golden Retriver"}, { $set: {type: "PENGGANTI"} , $currentDate: {lastModified:true}}) 
    9. (DELETE) db.dogs.deleteMany({type:"African Dogs"})


4. OPERATORS :
db.dogs.find({age: {$lt :9}})
