module.exports = (sequelize, Sequelize , commande) => {
    const HomePicture = sequelize.define("homePicture", {
        url : {
            type : Sequelize.STRING
        }
    });
    return HomePicture;
  };