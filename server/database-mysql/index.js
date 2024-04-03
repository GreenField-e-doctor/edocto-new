const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('edoctor', 'root', 'root', {
const sequelize = new Sequelize('edoctor', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});


const User = sequelize.define('User', {
  FirstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  LastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  Username: {
    type: DataTypes.STRING,
    allowNull: false,
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
  UserType: {
    type: DataTypes.ENUM('Patient', 'Doctor'),
    defaultValue: 'Patient',
  },
  Speciality: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  bio: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  adress: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Avatar: {
    type: DataTypes.STRING,
    defaultValue: '',
    allowNull: true
  },
})


const Doctor = sequelize.define('Doctor', {
  FirstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  LastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  Username: {
    type: DataTypes.STRING,
    allowNull: false,
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
    allowNull: false
  },
  Speciality: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Message = sequelize.define('Message', {
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
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
  AppointmentDepartment: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});


const RatingsComments = sequelize.define('RatingsComments', {
  rating: {
    type: DataTypes.INTEGER,

  },
  review: {
    type: DataTypes.TEXT,
  },
  imageSrc: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}

);

//         "imageSrc": "https://s3-alpha-sig.figma.com/img/0577/f0e9/b7fca2f32639871454da0de95f951709?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JNqy~MgzfTYiIFcizL-nr-Wr6ojSHe5uLBKQ1mvSOq71xqvn5SZa0JnKg4PqsxU3OyopZW3D797~muYI6V3nfsJusTlzfVJb7~dTmI3JTR43RFEFD-8LrRIhvSQnuMzD6Si7Z75gDgN6q6S8qNKoFbnbxloe-QIGIy-VmyUAgCDFfeMUlnO5olljOaKAYissbOtELqaFbwrJjoQfxwYmVnNjC7qKEQSmhyExt2VRnKeLEJiWE2e1IsdMJjW1U7PtWkXUACSEa9jIvKcy-AGsrUpT~0YqNYMkNQMNGYe5mWVyqSMox0-I4XfCjYOWKDhcF~neWYMkjQgy7tjmKgoaZg__",
//         "name": "Dr. Sarah Johnson",
//         "rating": 5,
//         "review": "Excellent service! Dr. Johnson was very knowledgeable and provided clear explanations."



const Admin = sequelize.define('Admin', {

  Username: {
    type: DataTypes.STRING,
    allowNull: false,
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
});


const Payments = sequelize.define('Payments', {

  Amount: {
    type: DataTypes.DECIMAL(10, 2),
  },
  PaymentDate: {
    type: DataTypes.DATE,
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
    type: DataTypes.TEXT,
    allowNull: true,
  },
})

const Comment = sequelize.define('Comment', {

  author:{
      type: DataTypes.TEXT,
    allowNull: false,

    },
    comment: {
    type: DataTypes.TEXT,
    allowNull: false,
   
  },
    timestamp:{
      type: DataTypes.DATE, 
    },
    BlogId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
    
});

const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  ImageUrl: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});


User.hasMany(RatingsComments);
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
  Product,
  Comment, // Add Comment to the exported modules
};

sequelize.sync()
  .then(() => {
    console.log('Database and tables created!');
  })
  .catch((error) => {
    console.error('Error creating database and/or tables:', error);
  });



const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('edoctor', 'Amine', 'wess2004wess', {
  host: 'localhost',
  dialect: 'mysql',
});


const User = sequelize.define('User', {
  FirstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  LastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  Username: {
    type: DataTypes.STRING,
    allowNull: false,
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
  UserType: {
    type: DataTypes.ENUM('Patient', 'Doctor'),
    defaultValue: 'Patient',
  },
  Speciality: {
    type: DataTypes.STRING,
    allowNull: true,
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
})


const Doctor = sequelize.define('Doctor', {
  FirstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  LastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  Username: {
    type: DataTypes.STRING,
    allowNull: false,
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
    allowNull: false
  },
  Speciality: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Message = sequelize.define('Message', {
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
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
  AppointmentDepartment: {
    type: DataTypes.STRING,
  allowNull: false,
  },
});


const RatingsComments = sequelize.define('RatingsComments', {
  rating: {
    type: DataTypes.INTEGER,

  },
  review: {
    type: DataTypes.TEXT,
  },
  imageSrc: { 
    type: DataTypes.TEXT,
    allowNull: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  }
  
);

  //         "imageSrc": "https://s3-alpha-sig.figma.com/img/0577/f0e9/b7fca2f32639871454da0de95f951709?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JNqy~MgzfTYiIFcizL-nr-Wr6ojSHe5uLBKQ1mvSOq71xqvn5SZa0JnKg4PqsxU3OyopZW3D797~muYI6V3nfsJusTlzfVJb7~dTmI3JTR43RFEFD-8LrRIhvSQnuMzD6Si7Z75gDgN6q6S8qNKoFbnbxloe-QIGIy-VmyUAgCDFfeMUlnO5olljOaKAYissbOtELqaFbwrJjoQfxwYmVnNjC7qKEQSmhyExt2VRnKeLEJiWE2e1IsdMJjW1U7PtWkXUACSEa9jIvKcy-AGsrUpT~0YqNYMkNQMNGYe5mWVyqSMox0-I4XfCjYOWKDhcF~neWYMkjQgy7tjmKgoaZg__",
  //         "name": "Dr. Sarah Johnson",
  //         "rating": 5,
  //         "review": "Excellent service! Dr. Johnson was very knowledgeable and provided clear explanations."



const Admin = sequelize.define('Admin', {
 
  Username: {
    type: DataTypes.STRING,
    allowNull: false,
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
});


const Payments = sequelize.define('Payments', {

  Amount: {
    type: DataTypes.DECIMAL(10, 2),
  },
  PaymentDate: {
    type: DataTypes.DATE,
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
    type: DataTypes.TEXT,
    allowNull: true,
  },
})

const Comment = sequelize.define('Comment', {

  author:{
      type: DataTypes.TEXT,
    allowNull: false,

    },
    comment: {
    type: DataTypes.TEXT,
    allowNull: false,
   
  },
    timestamp:{
      type: DataTypes.DATE, 
    },
    BlogId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
    
});

const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  ImageUrl: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  Category: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});


User.hasMany(RatingsComments);
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
  Product,
  Comment,
};

// sequelize.sync()
//   .then(() => {
//     console.log('Database and tables created!');
//   })
//   .catch((error) => {
//     console.error('Error creating database and/or tables:', error);
//   });


