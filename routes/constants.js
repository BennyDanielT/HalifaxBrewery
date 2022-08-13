import Home from './screens/home.js'

export const routes = {
  home: {
    name: 'home',
    component: "Home",
  },
  add: {
    name: 'add',
    component: "addProduct",
  },
  update: {
    name: 'update',
    component: "updateProduct",
  },
};



export const showPopup = (type, title, msg, callback = () => {}) => {
  Swal.fire(title, msg, type).then(() => {
    callback();
  });
};

export const showError = (error) => {
  const status = error.response.status.toString();
  if (status.match('4[0-9][0-9]')) {
    showPopup('error', 'Error', error.response.data.error);
  } else if (status.match('5[0-9][0-9]')) {
    showPopup('error', 'Error', 'Internal Server Error');
  } else {
    showPopup('error', 'Error', 'An error occurred. Please try again');
  }
};

// export const imgToBase64 = (file, callback) => {
//   let base64String = '';
//   const reader = new FileReader();
//   reader.onload = function () {
//     base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
//     callback(base64String);
//   };
//   reader.readAsDataURL(file);
// };

// export const getUserFullName = (user) => {
//   return user.email_id;
// };
