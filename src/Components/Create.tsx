import { useState } from "react"
import { CreateUser } from "../Features/CreateSlice";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";



    export const Create = () => {
        const [data, setData] = useState({});
        const dispatch = useDispatch();
       // const name = useSelector(name => name);
        // const name = useSelector((state: any) => state.name);
        // console.log('name',name);
        const navigate = useNavigate();

        const updateData = (e: any) => {
            e.preventDefault();
            setData({
                ...data,
                [e.target.name]: e.target.value,
            });
        };
        const handleSubmit = (e: any) => {
            e.preventDefault();
            console.log("user data", data);
            dispatch(CreateUser(data));
            //dispatch(name.page1 as any)(data);
 
            navigate("/Read");
        };

        return (
            <>
                <div className="mt-4 row container "><br />
                    <div className="  col-md-6  d-flex justify-content-center">
                        <h1 className="bg-primary text-center text-white">Create data</h1>

                        <form action="post" className="container" onSubmit={handleSubmit}>
                            <div className="formgroup mb-2 d-flex justify-content-center">
                                <label htmlFor="Enter First" className="mx-3">Enter First</label>
                                <input type="text" onChange={updateData} name="first" placeholder=" Enter First Name" className="formgroup" required />
                            </div>
                            <div className="formgroup mb-2 d-flex justify-content-center">
                                <label htmlFor="Enter Last" className="mx-3" >  Enter Last</label>
                                <input type="text" onChange={updateData} name="last" placeholder="Enter Last Name" className="formgroup" required />
                            </div>
                            <div className="formgroup mb-2 d-flex justify-content-center">
                                <label htmlFor="Enter email" className="mx-3">Enter email</label>
                                <input type="email" onChange={updateData} name="email" placeholder="Enter @ social media" className="formgroup" required />
                            </div>
                            <div className="  button row container d-flex justify-content-center">
                                <button className="btn btn-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }


