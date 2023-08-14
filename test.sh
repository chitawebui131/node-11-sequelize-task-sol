echo "Test structure"
DIR=("controllers" "config" "models" "routes")
for d in ${DIR[@]};
    do 
    if [ -d $d ]
    then
      echo "Directory $d exists"
    else
      echo "Error: Directory $d does not exists"
      exit 1
fi
done

if [ -f ./controllers/productsController.js ] 
then
      echo "Controller exists"
    else
      echo "Error: Controller does not exists"
      exit 1
fi

if [ -f ./config/db.js ] 
then
      echo "Database config file exists"
    else
      echo "Error: Database config file does not exists"
      exit 1
fi

if grep -R "sequelize" ./config/db.js
then
     echo "code sequelize  found"
else
    echo "code sequelize does not found"
    exit 1
fi

if grep -R "sequelize" package.json >/dev/null
then
     echo "library sequelize  found in package.json"
else
    echo "library sequelize does not found in package.json"
    exit 1
fi