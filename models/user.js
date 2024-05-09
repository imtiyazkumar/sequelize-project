
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'User',
        {
            // Model attributes are defined here
            firstName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            lastName: {
                type: DataTypes.STRING,
                // allowNull defaults to true
            },
            uuid: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4 // Or DataTypes.UUIDV1
            }
        },
        {
            // Other model options go here
            // tableName: 'users'
        },
    );

    return User;

    // Other model options go here
}
