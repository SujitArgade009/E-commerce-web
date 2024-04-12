import { useEffect } from 'react';
import { fetchUserData } from './DataSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Sujit() {
  const dispatch = useDispatch(fetchUserData);
  const userdata = useSelector((state) => state.userData.user);
  console.log(userdata);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {Array.isArray(userdata.users) ? (
          userdata.users.map((user) => <li key={user.id}>{user.firstName}{user.lastName}</li>)
        ) : (
          <li>Loading...</li>
        )}
      </ul>
    </div>
  );
}
