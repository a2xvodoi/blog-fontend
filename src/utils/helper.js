import utilsCommon from "./common";

export function capitalizeWord(word) {
  return word.toString().replace(/\b(\w)/g, (w) => w.toUpperCase());
}

export function getEnv(key) {
  return process.env[key];
}

export function convertBase64(file) {
  if (file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }
}

export function isBase64(str) {
  str = str.replace(/^data(.+)(base64,)/, "");
  if (str === "" || str.trim() === "") {
    return false;
  }
  try {
    return btoa(atob(str)) == str;
  } catch (err) {
    return false;
  }
}

export function formatDate(d) {
  const date = new Date(d);
  const minutes =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  const hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  const year = date.getFullYear();
  const month =
    date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
  const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  return `${hour}:${minutes} ${day}/${month}/${year}`;
}

export function authHeader() {
  let user = utilsCommon.getStorageDataByKey("user");
  if (user && user.token) {
    return { "x-access-token": user.token };
  } else {
    return {};
  }
}
