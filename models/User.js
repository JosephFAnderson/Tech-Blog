const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/config');
const bcrypt = require('bcrypt');
class User extends Model {
    checkPassword(userPw){
        return bcrypt.compare(userPw, this.password);
    };
}

User.init({
    username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
    },
    password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            }
    },
},  {
    hooks: {
        beforeCreate: async (newUserData) => {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        },
        beforeUpdate: async (updatedUserData) => {
            if (updatedUserData.password) {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            }                
            return updatedUserData;
        }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user"
});

module.exports = User;