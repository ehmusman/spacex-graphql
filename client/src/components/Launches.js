import React from 'react'
import { useQuery } from "@apollo/client"
import { getAllLaunches } from "../query/query"
import Launch from './Launch'
import Loading from "./Loading"
const Launches = () => {
    const { data, loading, error } = useQuery(getAllLaunches)

    if (loading) return <Loading />
    if (error) return <p>{error}</p>
    return (
        <div className="card-columns">
            {data.launches.map(launch => (
                <Launch
                    key={launch.launch_date_utc + launch.flight_number}
                    id={launch.flight_number}
                    date={launch.launch_date_utc.slice(0, 10)}
                    success={launch.launch_success}
                    name={launch.mission_name}
                    img={launch.links.mission_patch}
                    detail={launch.details}
                />
            ))}
        </div>
    )
}

export default Launches
