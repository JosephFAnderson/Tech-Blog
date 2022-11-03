const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/config.js');

class Comment extends Model{}

Comment.init(
    {
        content: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id"
            }
        },
        post_id: {
            type: DataTypes.INTEGER,
            reference: {
                model: "post",
                key: "id"
            }
        },
        created_at: {
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "comment"
    }
)

module.exports = Comment;