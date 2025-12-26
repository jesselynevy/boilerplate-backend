import {sequelize} from '../config/database.js';

export const db = {
    sequelize,
};

export const syncDB = async () => {
    await sequelize.sync({alter: true});
    console.log("All models were synchronized successfully.");
}