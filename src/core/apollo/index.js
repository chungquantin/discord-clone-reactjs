import { ApolloClient, InMemoryCache } from "@apollo/client";
import { uri } from "../config/apollo.config";

export default function ApolloClientInitialize() {
	return new ApolloClient({ uri, cache: new InMemoryCache() });
}
