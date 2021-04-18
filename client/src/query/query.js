import { gql } from "@apollo/client"
// query to get all launches

export const getAllLaunches = gql`
{
    launches{
        flight_number
        mission_name
		launch_date_utc
        launch_year
        launch_success
        details
        links{
            mission_patch
        }
    }
}
`


export const getSingleLaunch = gql`
query launch($id: ID!){
    launch(id: $id){
        flight_number
        mission_name
        launch_date_utc
        launch_success
        details
        rocket{
          rocket_id
          rocket_name
          rocket_type
        }
        links{
          mission_patch
          article_link
          wikipedia
          video_link
        }
    }
}
`