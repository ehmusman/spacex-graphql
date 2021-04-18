import React from 'react'
import { Link } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { getSingleLaunch } from "../query/query"
import Loading from "./Loading"
const LaunchDetail = ({ match }) => {
    const { data, error, loading } = useQuery(getSingleLaunch, {
        variables: { id: match.params.id }
    })

    if (loading) return <Loading />
    if (error) return <p>{error}</p>
    // console.log(data.launch)
    const { details, flight_number, launch_date_utc, launch_success, links, mission_name, rocket } = data.launch
    const { rocket_id, rocket_name, rocket_type } = rocket
    const { article_link, mission_patch, video_link, wikipedia } = links
    return (
        <div className="text-light mt-2 minHeight">
            <Link to="/" className="btn btn-dark border">Back</Link>
            <div className="row">
                <div className="col-12 col-md-6">
                    <img src={links.mission_patch} width="80%" height="80%" alt="" />
                </div>
                <div className="col-12 col-md-6">
                    <div className="card bg-dark text-light">
                        <div className="card-header">
                            <span className="heading">Mission Name:</span> <span className={`${launch_success ? "text-success" : "text-danger"}`}>{mission_name}</span>
                            <span className="float-right">{launch_success ? "Launch Succeeded" : "Launch Failed"} </span>
                        </div>
                        <div className="card-title pl-2">
                            <span className="heading">Flight Detail</span>
                            <p>{details}</p>
                        </div>
                        <div className="card-body">
                            <div className="card-title px-3">
                                <span className="heading">
                                    Flight Number
                               </span>
                                <p>{flight_number}</p>
                            </div>
                            <div className="card-title px-3">
                                <span className="heading">
                                    Flight Launch Date
                            </span>
                                <p>{launch_date_utc.slice(0, 10)}</p>
                            </div>
                            <div className="card-title px-3">
                                <span className="heading">
                                    Rocket Detail
                            </span>
                                <p><span className="heading1">Rocket ID:</span> {rocket_id}</p>
                                <p><span className="heading1">Rocket Name:</span> {rocket_name}</p>
                                <p><span className="heading1">Rocket Type:</span> {rocket_type}</p>
                            </div>

                            <div className="card-title px-3">
                                <span className="heading">
                                    Important Links
                                </span>
                                <p><span className="heading1">Article Link:</span> {article_link}</p>
                                <p><span className="heading1">
                                    Mission Patch:</span> {mission_patch}</p>
                                <p><span className="heading1">
                                    Wikipedia: </span>{wikipedia}</p>
                                <p><span className="heading1">Video Link:</span> {video_link}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LaunchDetail
