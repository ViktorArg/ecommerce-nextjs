import { type CognitoUser } from '@aws-amplify/auth';
import { Amplify, Auth } from 'aws-amplify';
import { AuthStack } from '../../backend/outputs.json';
import { CognitoIdentityClient } from '@aws-sdk/client-cognito-identity';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-providers';


const awsRegion = 'us-east-1'

Amplify.configure({
    Auth: {
        mandatorySignIn: false,
        region: awsRegion,
        userPoolId: AuthStack.GiftcardUserPoolId,
        userPoolWebClientId: AuthStack.GiftcardUserPoolClientId,
        identityPoolId: AuthStack.GiftcardUserPoolId,
        authenticationFlowType: 'USER_PASSWORD_AUTH'
    }
})

export class AuthService {

    private user: CognitoUser | undefined;
    public jwtToken: string | undefined;
    private temporaryCredentials: object | undefined;
    
    public isAuthorized(){
        return true
        // if (this.user) {
        //     return true;
        // }
        // return false;
    }

    public async login(userName: string, password: string):Promise<Object | undefined>{
        try {
            this.user = await Auth.signIn(userName, password) as CognitoUser;
            console.log("user", this.user)
            this.jwtToken = this.user?.getSignInUserSession()?.getIdToken().getJwtToken();
            console.log("jwtToken", this.jwtToken)
            return this.user;
        } catch (error) {
            console.log(error);
            return undefined
        }
    }
    // Lazy loading, only create when required
    public async getTemporaryCredentials(){
        if(this.temporaryCredentials){
            return this.temporaryCredentials;
        }
        this.temporaryCredentials = await this.generateTemporaryCredentials();
        return this.temporaryCredentials;
    }

    public getUser(){
        return this.user;
    }

    public getUserName(){
        return this.user?.getUsername();
    }

    public async generateTemporaryCredentials(){
        const cognitoIdentityPool = `cognito-idp.${awsRegion}.amazonaws.com/${AuthStack.GiftcardUserPoolId}`;
        const cognitoIdentity = new CognitoIdentityClient({
            credentials: fromCognitoIdentityPool({
                clientConfig: {
                    region: awsRegion
                },
                identityPoolId: AuthStack.GiftcardIdentityPoolId,
                logins: {
                    [cognitoIdentityPool]: this.jwtToken!
                }
            })
        })
        const  credentials = await cognitoIdentity.config.credentials();
        console.log("credentials",credentials)
        return credentials;
    }
}