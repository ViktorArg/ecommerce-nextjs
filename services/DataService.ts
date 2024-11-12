import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { DataStack, ApiStack } from "../../backend/outputs.json";
import { AuthService } from "./Authservice";
import { ProductEntry } from "@models/model";
import { type CognitoUser } from "@aws-amplify/auth";

// CORS issues may be wrong URL
const giftcardUrl = ApiStack.GiftcardApiEndpoint83263C95 + 'products'

export class DataService {

    private authService: AuthService;
    private s3Client: S3Client | undefined;
    private awsRegion = 'us-east-1';

    constructor(authService: AuthService){
        this.authService = authService;
    }

    public async getProducts(user: CognitoUser | null):Promise<ProductEntry[]> {
        console.log("user", JSON.stringify(user))
        if(user !== null){
            const jwtToken = user?.getSignInUserSession()?.getIdToken().getJwtToken();
            console.log("jwtToken", jwtToken)
            const getProductsResult = await fetch(giftcardUrl, {
                method: 'GET',
                headers: {
                    'Authorization': jwtToken!
                }
            });
            const getProductsResultJson = await getProductsResult.json();
            return getProductsResultJson;
        }
        return [];
    }

    public async createProduct(name: string, category: string, subCategory: string, description: string, price: number, discount: number, photo?: File){
        const product = {} as any;
        product.name = name;
        product.category = category;
        product.subCategory = subCategory;
        product.description = description;
        product.price = price;
        product.discount = discount;
        if(photo){
            const uploadUrl = await this.uploadPublicFile(photo);
            product.imageUrl = uploadUrl;
        }

        const postResult = await fetch(giftcardUrl, {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Authorization': this.authService.jwtToken!
            }
        });
        const postResultJSON = await postResult.json();
        return postResultJSON.id;
    }

    public isAuthorized(){
        return this.authService.isAuthorized();
    }

    public async uploadPublicFile(file: File){
        const credentials = await this.authService.getTemporaryCredentials();
        if(!this.s3Client){
            this.s3Client = new S3Client({
                credentials: credentials as any,
                region: this.awsRegion
            })
        }
        
        const command = new PutObjectCommand({
            Bucket: DataStack.GiftcardPhotosBucketName,
            Key: file.name,
            ACL: 'public-read',
            Body: file
        });
        await this.s3Client.send(command);
        return `https://${command.input.Bucket}.s3.${this.awsRegion}.amazonaws.com/${command.input.Key}`
    }

}