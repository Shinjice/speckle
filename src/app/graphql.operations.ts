import { gql } from "apollo-angular";

const GET_PROJECT_ID = gql`
    query GetServerInfo {
        serverInfo {
            name
        }
    }
`

export { GET_PROJECT_ID }