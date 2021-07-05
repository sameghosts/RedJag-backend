// ------ Dependencies
const { ApolloError } = require('apollo-server-errors')
const bcrypt = require('bcrypt');

// ------ Auth Middleware
//TODO: Add back in after auth middlware written
const { issueToken, serializedUser } = require('../../helper/UserAuth');

module.exports = {
  Query: {
    // test query 
    test: () => {
      return 'Hello from the user resolver.'
    },
    // Login user 
    loginUser: async (_, {
      username,
      password
    }, {
      User
    }) => {
      try {

        // find user by username
        let user = await User.findOne({ username });
        if (!user) {
          throw new Error("Username not found.");
        }
        // check for the password using bcrypt
        let isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          throw new Error("Invalid password.");
        }
        // Serialize the User
        user.id = user._id;
        user = serializedUser(user.toObject());
        // Issue New Authentication Token
        let token = await issueToken(user);
        //send back user and token
        return {
          user,
          token
        };
      } catch (err) {
        throw new ApolloError(err.message, 404);
      }
    }
    
  },

  Mutation: {
    test: () => {
      return 'test successful'
    },
    registerUser: async (_, {
      newUser
    }, {
      User
    }) => {
      try{
        //destructured new user
        let { username, email } = newUser
        //check if username is taken
        let user = await User.findOne({ 
          username: username 
        })
        if (user){
          throw new ApolloError("Username is already taken!", 403)
        }
        //check if email is registered
        user = await User.findOne({
          email: email
        });
        if (user) {
          throw new ApolloError("Email is already registered", 403)
        }
        //create new user instance
        user = new User(newUser);
        //hash the password - 10 salt rounds
        user.password = await bcrypt.hash(newUser.password, 10);
        // save the user to db
        let result = await user.save();
        result = await serializedUser(result);
        // Issue the authentication JWT token
        let token = await issueToken(result);
        return {
          token,
          user: result
        }
      } catch(err){
        // throw error if try fails
        throw new ApolloError (err.message, 400)
      }
    }
  }
}