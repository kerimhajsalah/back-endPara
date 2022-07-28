// const User = sequelize.define('User', {
//   // Model attributes are defined here
//   firstName: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   lastName: {
//     type: DataTypes.STRING
//     // allowNull defaults to true
//   }
// });
// module.exports=User;

module.exports = (sequelize, Sequelize , commande) => {
    const Categorie = sequelize.define("Categorie", {
        name: {
        type: Sequelize.STRING
      }
    });
    return Categorie;
  };