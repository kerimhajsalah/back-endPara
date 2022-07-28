

module.exports = (sequelize, Sequelize , commande) => {
    const SousCategorie = sequelize.define("SousCategorie", {
        name: {
        type: Sequelize.STRING
      },
      CategorieId : {
        type : Sequelize.INTEGER
    }
    });
    return SousCategorie;
  };