import styles from "./users.module.css"

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://schoolsw3.com/tryit/avatar.png',
                followed: false,
                fullName: 'Oleg',
                status: 'I want to eat',
                location: {country: 'Ukraine', city: 'Odesa'}
            },
            {
                id: 2,
                photoUrl: 'https://html5css.ru/howto/img_avatar2.png',
                followed: true,
                fullName: 'Alla',
                status: 'Teaching is my passion',
                location: {country: 'Ukraine', city: 'Korosten'}
            },
            {
                id: 3,
                photoUrl: 'https://schoolsw3.com/tryit/avatar.png',
                followed: false,
                fullName: 'Alex',
                status: 'Like to read books',
                location: {country: 'United Kingdom', city: 'London'}
            }
        ])
    }


    return <div className={styles.wrapper}>
        {
            props.users.map((u) => <div key={u.id}>
                <span>
                    <div className={styles.userPhoto}>
                        <img src={u.photoUrl} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;