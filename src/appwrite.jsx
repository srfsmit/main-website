import { Client, Databases, Storage, Query } from "appwrite";
const client = new Client();

client
	.setEndpoint("https://cloud.appwrite.io/v1")
	.setProject("66998c41001a110db1b6");

export const databases = new Databases(client);
export const storage = new Storage(client);
