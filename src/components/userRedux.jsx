export default function userReducer(user, action) {
    switch (action.type) {
      case 'login': {
        return action.user
      }
      case 'logout': {
        return {
          logged: false
        }
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }