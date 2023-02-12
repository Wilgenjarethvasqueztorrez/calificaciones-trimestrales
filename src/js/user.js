//Definir la cuenta del administrador
export const getAdmin = () => {
    //Id de la cuenta de administrador (Creador de la aplicación)
    return ['aA4K6G4b1wV6OfgxGERpdmJH2Th1'];
}

//Get the user data from the window storage
export const getUser = () => {
    const user = window.localStorage.getItem('user_calificaciones');
    return JSON.parse(user);
}
