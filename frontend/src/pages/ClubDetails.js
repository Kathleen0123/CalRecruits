import { useParams } from "react-router-dom"

export default function ClubDetails() {
    const params = useParams()
    let clubData = null

    switch (params.id) {
        case "1":
            clubData = {
                name: 'Public Health Advocate',
                image: '../img/club1.png',
                major: 'All',
                description: 'Founded in 2005, the Public Health Advocate (PHA) is an undergraduate publication featuring current public health issues with local, national, and international perspectives. It is the nation\'s first undergraduate public health publication. The Public Health Advocate is dedicated to giving students interested in health the opportunity for their work to be published in our print issue or our online platform. Print issues are made available to the campus community each semester, and our online platform is updated regularly with articles.\nWe offer two programs: Decal and Extracurricular programs.\nOur DeCal is specifically designed for students new to PHA and focuses on guiding students through the writing, editing, and publication process to equip students with the knowledge and expertise necessary to communicate health topics effectively. Returning PHA writers and editors or students with previous publication experience are encouraged to join PHA as an extracurricular activity. All writers and copy editors participating in our publication have the same workload and general draft deadlines, but extracurricular students only meet for 30 minutes every week with their editor-writer teams.',
                deadline: '09/08/2023'
            }
            break
        
        case "2":
            clubData = {
                name: 'Cal Quidditch',
                image: '../img/club2.png',
                major: 'All',
                description: 'You might have seen us on Memorial Glade, passing Quaffles back and forth, clenching broomsticks between our legs. You might have heard the smack of dodgeballs striking their targets as our Beaters hone their skills, or seen our Seekers try to grab the Snitch off a player’s shorts. You might have accidentally been hit by a Bludger as you tried to enjoy a relaxing afternoon on the Glade (sorry).  But most importantly Cal Quidditch is more than a sports team; it’s a community. It has given both Harry Potter nerds and Muggles a place to connect and form lasting connections while having the time of their lives on and off the field. Come join us if you are looking for some life-long friends and if you feel like your experience at Berkeley is missing some magic.',
                deadline: '12/10/2023'
            }
            break
        
        default:
            break
    }

    return (
        <>
            <h1>{clubData.name}</h1>
            {
                clubData != null ?
                <>
                    <img src={clubData.image} alt={clubData.name} width="400" />
                    <br />
                    <h2>About Us</h2>
                    <p>Relevant Majors: {clubData.major}</p>
                    <p>{clubData.description}</p>
                    <h2>Application Deadline: {clubData.deadline}</h2>
                </>
                : ''
            }
        </>
    )
}