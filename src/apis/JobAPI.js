import axiosmain from "./axiosmain";




export const apiJobList = async (keyword) => {
    const { data } = await axiosmain.get(`/cong-viec/phan-trang-tim-kiem`, {
      params: {
        keyword: keyword,
      },
    });
    return data?.content;
  };