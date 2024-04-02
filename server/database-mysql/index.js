// Import Sequelize and define connection
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('edoctor', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});




const User = sequelize.define('User', {

  FirstName: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue:'john'
  },
  LastName: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue:'doe'
  },

  Username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
  },
  Password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  PhoneNumber: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue:'06254987'
  },
  imageUrl: {
    type: DataTypes.STRING,
    defaultValue: '',
    allowNull: true
  },
  UserType: {
    type: DataTypes.ENUM('Patient', 'Doctor'),
    defaultValue: 'Patient',
  }
})


const Doctor = sequelize.define('Doctor', {
  FirstName: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue:'john'
  },
  LastName: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue:'doe'
  },

  Username: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  Password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  PhoneNumber: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ImageUrl: {
    type: DataTypes.STRING,
    defaultValue: '',
    allowNull: true
  },
  Speciality: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});


const Appointment = sequelize.define('Appointment', {

  AppointmentTime: {
    type: DataTypes.DATE,
  },
  Status: {
    type: DataTypes.ENUM('Pending', 'Accepted', 'Rejected'),
    defaultValue: 'Pending',
  },
  PaymentStatus: {
    type: DataTypes.ENUM('Paid', 'Unpaid'),
    defaultValue: 'Unpaid',
  },
  Department : {
    type: DataTypes.STRING,
    allowNull: false,
  }
  }
)


const RatingsComments = sequelize.define('RatingsComments', {
  Rating: {
    type: DataTypes.INTEGER,
  },
  Comment: {
    type: DataTypes.TEXT,
  },
});



const Payments = sequelize.define('Payments', {
  
  Amount: {
    type: DataTypes.DECIMAL(10, 2),
  },
  PaymentDate: {
    type: DataTypes.DATE,
  },
})

const Message = sequelize.define('Message', {
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  senderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  });
const Blog = sequelize.define('Blog', {
  Title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  ImageUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

const Comment = sequelize.define('Comment', {
  Text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

User.hasMany(RatingsComments);
Doctor.hasMany(RatingsComments);
Doctor.hasMany(Appointment);
User.hasMany(Appointment);
User.hasMany(Blog);
Blog.belongsTo(User);
Blog.hasMany(Comment); 
Comment.belongsTo(Blog);

module.exports = {
  User,
  Doctor,
  Appointment,
  RatingsComments,
  Payments,
  Message,
  Blog,
  Comment, // Add Comment to the exported modules
};

// sequelize.sync()
//   .then(() => {
//     console.log('Database and tables created!');
//   })
//   .catch((error) => {
//     console.error('Error creating database and/or tables:', error)
//   })





