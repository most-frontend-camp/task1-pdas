function ProfileCard(props) {
    // return <div>Astana is {props.title}</div>;
    return (
      <div>
          <div>Title is {props.title}</div>
          <div>Handle is {props.handle}</div>
      </div>
    );

}

export default ProfileCard;