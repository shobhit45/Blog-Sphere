
import conf from "../conf/Conf";
import { Client, Account, ID,Databases,Storage,Query } from "appwrite"; 

export class Service{
    Client=new Client();
    Databases;
    bucket;
    constructor(){
        this.Client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId) 
        this.Databases= new Databases(this.Client);
        this.bucket=new Storage(this.Client);
    }
     
    async createpost({title,slug,content,featuredimage,status,userid}){
         try {
            return await this.Databases.createDocument(
                conf.appwriteDATABASEID,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredimage,
                    status,
                    userid,
                }
            )
         } catch (error) {
            console.log("error in createpost",error)
         }
    }
    async updatepost(slug,{title,content,featuredimage,status}){
        try {
           return await this.Databases.updateDocument(
               conf.appwriteDATABASEID,
               conf.appwriteCollectionId,
               slug,
               {
                   title,
                   content,
                   featuredimage,
                   status,
                   
               }
           )
        } catch (error) {
           console.log("error in ipdatepost",error)
        }
   }
   async deletepost(slug){
    try {
       await this.Databases.deleteDocument( 
        conf.appwriteDATABASEID,
        conf.appwriteCollectionId,
        slug
       )
       return true;
    } catch (error) {
        return false;
    }
   }

   async getpost(slug){
    try {
        return  await this.Databases.getDocument(
            conf.appwriteDATABASEID,
            conf.appwriteCollectionId,
            slug
        )
    } catch (error) {
        return false;
    }
   }
   async getposts(Queries=[Query.equal("status","active")]){
    try {
        return  await this.Databases.listDocuments(
            conf.appwriteDATABASEID,
            conf.appwriteCollectionId,
            Queries
        )
    } catch (error) {
        return false;
    }
   }
   // file upload service
   async uploadfile(file){
    try {
        return await this.bucket.createFile(
            conf.appwriteBUCKETID,
            ID.unique(),
            file
        )
    } catch (error) {
        return false;
    }
   }
    
   async deletefile(fileid){
    try {
        await this.bucket.deleteFile(
            conf.appwriteBUCKETID,
            fileid
            

        )
        return true;
    } catch (error) {
        return false
    }
   }
   getfilepreview(fileid){
    this.bucket.getFilePreview(
        conf.appwriteBUCKETID,
        fileid
    )
   }
} 

const service=new Service()

export default service