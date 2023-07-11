import axiosmain from "./axiosmain";

export const apiLogin = async (values) => {
    const { data } = await axiosmain.post("/auth/signin", values);
    return data;
};

export const apiRegister = async (values) => {
    const { data } = await axiosmain.post("/auth/signup", values);
    return data;
};