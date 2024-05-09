module.exports = (sequelize, DataTypes) => {

    const Contact = sequelize.define(
        'Contact',
        {
            // Model attributes are defined here
            permanent_address: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            current_address: {
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
            // tableName: 'contact'
        },
    );
    return Contact;
    // Other model options go here
}
