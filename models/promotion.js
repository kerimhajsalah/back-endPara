module.exports = (sequelize, Sequelize , commande) => {
    const Categorie = sequelize.define("Promotion", {
        Pourcentage : {
            type : Sequelize.INTEGER
        },
      startDate : {
          type : Sequelize.DATE
      },
      endDate : {
          type : Sequelize.DATE
      },
    });
    return Categorie;
  };