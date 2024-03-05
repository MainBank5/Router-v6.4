import { useParams } from "react-router-dom"

const ProfilePage = () => {
    const params = useParams() // if it were typescript useParams<{projectId:string}>()
    console.log(params)
  return (
    <div>
        <h1>Profile page {params.profileId}</h1>
    </div>
  )
}

export default ProfilePage