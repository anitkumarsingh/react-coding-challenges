import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/Actions/fetchUsers';

const Users = () => {
	const dispatch = useDispatch();

  const reverseString = (str)=>{
    let r ='';
    for(let i = str.length-1;i>=0; i--){
      r +=str[i];
    }
    return r;
  }
	const secondMax = () => {
		const arr = [23, 12, 543, 87, 56];
		const max = Math.max.apply(null, arr);
    arr.splice(arr.indexOf(max),1);
		return Math.max.apply(null,arr);
	};
	useEffect(() => {
		dispatch(fetchUsers());
		console.log(secondMax());
    console.log(reverseString('JavaScript is cool'))
	}, []);

	const { users, isLoading } = useSelector((s) => s?.fetchUsersReducer);
	if (isLoading) return <p>Loading...</p>;

	const renderUsers = users?.map((u) => {
		return (
			<div key={u.id}>
				<p>{u.name}</p>
			</div>
		);
	});
	return (
		<div>
			Users:
			{renderUsers}
		</div>
	);
};

export default Users;
