import { ID, Query } from "appwrite";
import { databases } from "./appwrite";

const database_id = '66431d5a00229c5bbd1f';
const collection_id = '67f8ded40026b2273e0e';

export const createAuthUser = async (authUser) => {
    let { user_id, password, name, roll_no, course, year, email } = authUser;
    user_id = parseInt(user_id);
    roll_no = parseInt(roll_no);
    year = parseInt(year);
    let result = await databases.createDocument(
        database_id,
        collection_id,
        ID.unique(),
        {
            user_id,
            password,
            name,
            roll_no,
            course,
            year,
            email
        }
    );
    return result;
}

export const deleteAuthUser = async (DocID) => {
    const result = await databases.deleteDocument(
        database_id,
        collection_id,
        DocID,
    );
    return result;
}

export const listAuthUser = async () => {
    const result = await databases.listDocuments(
        database_id,
        collection_id,
        [Query.limit(5000)]
    );
    return result;
}

export const getAuthUser = async (DocID) => {
    const result = await databases.getDocument(
        database_id,
        collection_id,
        DocID,
    );
    return result;
}