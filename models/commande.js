const { Product, User } = require(".");


module.exports = (sequelize, Sequelize ) => {
    const Commande = sequelize.define("Commande", {
      adresse : {
        type : Sequelize.STRING
      },
      montant : {
        type : Sequelize.INTEGER
      },
      status : {
        type : Sequelize.STRING
      },
      firstName : {
        type : Sequelize.STRING
      },
      lastName : {
        type : Sequelize.STRING
      },
      Phone : {
        type : Sequelize.INTEGER
      }
      
    });

    return Commande;
  };