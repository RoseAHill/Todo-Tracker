import { Auth } from 'aws-amplify';

export const signOut = async () => {
    try {
        await Auth.signOut()
        window.location.reload(false)
    } catch (error) {
        console.log('error signing out: ', error);
    }
}