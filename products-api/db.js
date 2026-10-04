const{Sequelize}=require("sequelize");
const sequelize = new Sequelize(
    "products_db",
    "root",
    "1234567",
    {
        host:"localhost",
        dialect:"mysql"
    }
);

sequelize.authenticate()
    .then(()=>{
        console.log("mysql database connected successfully");
    })
    .catch((error)=>{
        console.log("Unable to connect:",error);
    });
module.exports = sequelize;