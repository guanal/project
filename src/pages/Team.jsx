import LeadershipTeam from '../components/team/LeadershipTeam'
import MeetingStructure from '../components/team/MeetingStructure'
import VolunteerGrid from '../components/team/VolunteerGrid'

const Team = () => {
  return (
    <div className="pt-24">
      <LeadershipTeam />
      <MeetingStructure />
      <VolunteerGrid />
    </div>
  )
}

export default Team