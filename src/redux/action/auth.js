import AsyncStorage from '@react-native-async-storage/async-storage';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Axios from 'axios';
//import { API_HOST } from '../../config/API';
import ApiConfig from '../../config/ApiConfig';
import ApiHeader from '../../config/ApiHeader';
import { getData, showMessage, showToast, showToasty, storeData } from '../../utils';
import { setLoading } from './global';
// import ApiConfig from '../../config/ApiConfig';
import { getDataAppLB, setGlobal, setLoadingScreen } from '.';
import { getMyPayLB } from './myPay';


export const signUpActionLB = (dataRegister, navigation) => (dispatch) => {
  console.log('d register', dataRegister);
  if (dataRegister.name === '') {
    return showToasty('Nama Anda belum diisi', 'warning');
  } else if (dataRegister.username === '') {
    return showToasty('Username Anda belum diisi', 'warning');
  } else if (dataRegister.email === '') {
    return showToasty('Email Anda belum diisi', 'warning');
  } else if (dataRegister.password === '') {
    return showToasty('Password Anda belum diisi', 'warning');
  } else if (dataRegister.password !== dataRegister.c_password) {
    return showToasty('konfirmasi password harus sama', 'warning');
  }
  dispatch(setLoading(true));

  Axios.post(`${ApiConfig}/api/acls/registrasi`, dataRegister, { header: ApiHeader })
    .then((res) => {
      console.log('res', res);
      res.data.password = dataRegister.password;
      res.data.user_id = res.data.id;
      const registerUser = res.data;
      storeData('registerUser', registerUser);
      //const authUser = res.data;
      //storeData('token', {value: token});
      // storeData('authUser', authUser);
      // dispatch({type: 'SET_AUTH_USER', value: authUser});
      //dispatch({type: 'SET_TOKEN', value: token});
      //const token =  `${res.data.data.token_type} ${res.data.data.acces_token}`
      //const authUser = res.data.data
      //storeData('token', {value : token})
      // if(res.data.error){
      //     showMessage('Erorr: ', res.data?.error)

      // }else{

      //showMessage('Register success', 'success');
      showToasty('Register success', 'success');
      if (dataRegister?.provider === 'GOOGLE' || dataRegister?.provider === 'FACEBOOK') {
        const token = `${res.data.data.token_type} ${res.data.data.acces_token}`;
        storeData('token', { value: token });
        showToasty('Success Sign In', 'show');
        navigation.reset({ index: 0, routes: [{ name: 'MainApp' }] });
      } else {
        const formSendOtp = {
          username: dataRegister?.username,
          hp: dataRegister?.hp
        }
        Axios.post(`${ApiConfig}/api/acls/sendOTP`, formSendOtp, { header: ApiHeader })
          .then((res) => {
            showMessage('Kami sudah mengirim kode OTP melalui whatsapp anda', 'success')
          })
          .finally(() => {

            navigation.navigate('SuccessRegister', { user_id: registerUser.id, email: registerUser?.email, hp: registerUser?.hp, username: registerUser?.username, password: registerUser?.password, status: 'unverified' });

          })
      }
      // }
    })
    .catch((err) => {
      console.log('error', err);
      //showMessage(`Error Sign Up !!! ${err}`);
      showToasty(
        // `Error Sign Up , email / username sudah terdaftar, gunakan email atau username lain !!! ${err?.response?.data?.data?.message}`,
        `Error Sign Up , username/email sudah terdaftar, gunakan username atau email lain atau silahkan login !!! ${err}`,
        'error',
      );
    })
    .finally(() => {
      dispatch(setLoading(false));
    });
};

export const signInActionLB = (form, navigation) => (dispatch) => {

  dispatch(setLoading(true));
  showToast('Memproses...')
  console.log('formData', form)
  Axios.post(`${ApiConfig}/api/acls/login`, form, { header: ApiHeader })
    .then((res) => {
      console.log('res login lb', res);
      if (res.data.data.status === 'unverified') {
        res.data.data.password = form.password;
        const registerUser = res.data.data;
        storeData('registerUser', registerUser);
        console.log('registerUser', registerUser)
        navigation.navigate('SuccessRegister', { user_id: registerUser?.id, username: registerUser?.username, email: registerUser?.email, hp: registerUser?.hp, password: registerUser?.password, status: registerUser?.status });
      } else {
        dispatch({ type: 'SET_AUTH_USER', value: {} });
        storeData('authUser', null);
      
        // setTimeout(()=>{
          const token = `${res.data.meta.token}`;
          //res.data.data.user_id = res.data.data.id;
          //const authUser = res.data.data;
          storeData('token', { value: token });
          // storeData('authUser', authUser);
          // dispatch({type: 'SET_AUTH_USER', value: authUser});
          dispatch({ type: 'SET_TOKEN', value: token });
          showMessage(`Success Sign In`, 'success')
  
          res.data.data.user_id = res.data.data.id;
          res.data.data.password = form.password
          res.data.data.token = token
  
          const authUser = res.data.data
          storeData('authUser', authUser);
          console.log('authUser', authUser)
          dispatch({ type: 'SET_AUTH_USER', value: authUser });
          if (authUser?.fk_detail) {
            dispatch({ type: 'SET_AUTH_DETAIL', value: authUser?.Detail });
          }
        getData('akunList').then(async (resAkunList) => {
          if (resAkunList) {
            const akunDropDown = resAkunList?.value?.find((akun) => {
              return akun.id == authUser?.id
            })
            if (!akunDropDown) {
              const akunListNew = resAkunList?.value
              akunListNew?.push(authUser);
              await dispatch({type: 'SET_AKUN_LIST', value: akunListNew});
              storeData('akunList', { value: akunListNew })
              await dispatch(getMyPayLB())
              // return dispatch(getDataAppLB(navigation));
              return navigation.replace('Splash');
            }else{
              await dispatch(getMyPayLB())
              return navigation.replace('Splash');
            }
          }else{
            const akunListNew = [];
            akunListNew?.push(authUser);
            await dispatch({type: 'SET_AKUN_LIST', value: akunListNew});
            storeData('akunList', { value: akunListNew });
            dispatch(getMyPayLB());
             return dispatch(getDataAppLB(navigation));
            

          }
        })
        
      // },2000)
  

}
      })
      .catch ((err) => {
  console.log('err', err);
  //showMessage(`Error Sign In !!! ${err?.response?.data?.data?.message}`);
  showToasty(
    //`Error Sign In !!! ${ApiConfig} ${err?.response?.data?.errors}`,
    `Error Sign In (email atau password anda salah) !!! ${err}`,
    'error',
  );
})
      .finally(() => {
  dispatch(setLoading(false));

});
  };

export const logoutActionLB = (authUser, navigation) => async (dispatch) => {
  // console.log('token', token)
  dispatch(setGlobal(false));

  dispatch(setLoading(true));
  getData('token').then(async (resToken) => {
  
    await AsyncStorage.clear();
    try {
      dispatch({ type: 'SET_AUTH_USER', value: null });
      dispatch({ type: 'SET_AUTH_DETAIL', value: null });
      dispatch({ type: 'SET_TOKEN', value: null });
      if (authUser?.provider === 'GOOGLE') {
        // await GoogleSignin.revokeAccess();
        // await GoogleSignin.signOut();
      }
      if (authUser?.provider === 'FACEBOOK') {
        // await LoginManager.logOut()
      }
    } catch (error) {
      console.error('err logout', error);
    }
    dispatch(setLoading(false));
    socket.off("connect");
    socket.off("disconnect");
    dispatch({ type: 'SET_IS_USER_ONLINE', value: false });

    // navigation.replace('Splash');
    // navigation.reset({index: 0, routes: [{name: 'Notification'}]});
    navigation.reset({ index: 0, routes: [{ name: 'Splash' }] });

    // });
  })
};


