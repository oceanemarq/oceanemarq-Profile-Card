import logo from './logo.svg';
import './App.css';
import ProfileCard from './ProfileCard';

const App = () => {
  const profiles = [
    {
      image: "https://example.com/image1.jpg",
      name: 'Pierre Dumont',
      jobTitle: 'Frontend Developer',
      bio: 'Passionate about creating user-friendly web applications'
    },
    {
      image: "https://example.com/image1.jpg",
      name: 'Justin Tremblay',
      jobTitle: "Plumber",
      bio: "Passionate about unclogging your toilets"
      
    },
    {
      image: "https://example.com/image1.jpg",
      name: "Aurelie Veaulier",
      jobTitle: "Youtuber",
      bio: "Passionate about influencing you"
    }
  ];

  return(
    <div className="app">
      <h1> Team Profiles</h1>
      <ul>
        {profiles.map(profile =>
          <li key={profile.name} >
          {profile.image} {profile.name} {profile.jobTitle} {profile.bio}
          </li>
        )}
      </ul>
    </div>
  );
};

export default App;
