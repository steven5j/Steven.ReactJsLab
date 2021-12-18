import {useNavigate } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupPage(){
    const navigate =useNavigate ();

    function addMeetupHandler(meetupData){
        console.log(meetupData);
        console.log(JSON.stringify(meetupData));
        fetch(
            "http://localhost:3000/posts",{
                method:"post",
                body:JSON.stringify(meetupData),
                headers:{
                    "Content-type":"application/json",
                },
            }
        ).then(e=>{
            navigate("/");
        });
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
        </section>
    )
}
export default NewMeetupPage