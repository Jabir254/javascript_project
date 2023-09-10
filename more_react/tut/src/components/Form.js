import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup';

export const Form = () => {
    

    const schema = yup.object().shape({
        fullName: yup.string().required(),
        email: yup.string().email().required(),
        age: yup.number().positive().integer().min(18).required(),
        password: yup.string().min(4).max(20).required(),
        confirmpass: yup.string().oneOf([yup.ref("password"), null]).required(),
    });

    const { register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data)
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Full Name..." {...register("fullName")} />
            <input type="text" placeholder="Email..." {...register("email")} />
            <input type="number" placeholder="Age..."{...register("age")} />
            <input type="Password" placeholder="Password..."{...register("password")} />
            <input type="Password" placeholder="Confirm Password..." {...register("confirmpass")} />
            <input type="submit" />
        </form>
    );
}
export default Form;