const initStateRegister = {
  userRegister: {},
 
};

export const registerReducer = (state = initStateRegister, action) => {
  if (action.type === 'SET_REGISTER') {
    return {
      ...state.userRegister,
      
    };
  }
 
  return state;
};
const initPhoto = {
  uri: '',
  type: '',
  name: '',
  isUploadPhoto: false,
};

export const photoReducer = (state = initPhoto, action) => {
  if (action.type === 'SET_PHOTO') {
    return {
      ...state,
      uri: action.value.uri,
      type: action.value.type,
      name: action.value.name,
    };
  }
  if (action.type === 'SET_UPLOAD_STATUS') {
    return {
      ...state,
      isUploadPhoto: action.value,
    };
  }
  return state;
};

const initStateAuthUser = {
  authUser: {},
  authDetail : {},
  
  akunList: []
};

export const authReducer = (state = initStateAuthUser, action) => {
  if (action.type === 'SET_AUTH_USER') {
    return {
      ...state,
      authUser: action.value,
    };
  }else if (action.type === 'SET_AUTH_DETAIL') {
    return {
      ...state,
      authDetail: action.value,
    };
  }
 
  else if (action.type === 'SET_TOKEN') {
    return {
      ...state,
      token: action.value,
    };
  }
  
  else if (action.type === 'SET_AKUN_LIST') {
    return {
      ...state,
      akunList: action.value,
    };
  }
  return state;
};
