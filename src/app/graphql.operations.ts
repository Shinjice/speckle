import { gql } from "apollo-angular";

const GET_SERVER_INFO = gql`
    query GetServerInfo {
        serverInfo {
            name
        }
    }
`

export { GET_SERVER_INFO }